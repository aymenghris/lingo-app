import type { WebhookEvent } from "@clerk/nextjs/server"
import { deleteUser, upsertUser } from "@database/queries"
import { headers } from "next/headers"
import { Webhook } from "svix"

export const POST = async (req: Request) => {
	const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

	if (!WEBHOOK_SECRET) {
		throw new Error(
			"Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
		)
	}

	const headerPayload = await headers()
	const svix_id = headerPayload.get("svix-id")
	const svix_timestamp = headerPayload.get("svix-timestamp")
	const svix_signature = headerPayload.get("svix-signature")

	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("Error occurred -- no svix headers", {
			status: 400,
		})
	}

	const payload = await req.json()
	const body = JSON.stringify(payload)

	const wh = new Webhook(WEBHOOK_SECRET)

	let evt: WebhookEvent

	// Verify the payload with the headers
	try {
		evt = wh.verify(body, {
			"svix-id": svix_id,
			"svix-timestamp": svix_timestamp,
			"svix-signature": svix_signature,
		}) as WebhookEvent
	} catch (err) {
		console.error("Error verifying webhook:", err)
		return new Response("Error occurred", {
			status: 400,
		})
	}

	// Handle the event
	const eventType = evt.type

	if (eventType === "user.created" || eventType === "user.updated") {
		const { id, email_addresses, first_name, last_name, image_url } =
			evt.data

		// Safety check: ensure required data is present
		if (!id || !email_addresses) {
			return new Response("Error occurred -- missing data", {
				status: 400,
			})
		}

		// Prepare the user object
		const userValues = {
			id: id,
			fullName: [first_name, last_name].filter(Boolean).join(" "),
			email: email_addresses[0]?.email_address ?? "",
			avatar: image_url,
		}

		await upsertUser(userValues)

		return new Response("User upserted successfully", { status: 200 })
	}

	if (eventType === "user.deleted") {
		const { id } = evt.data

		if (!id) {
			return new Response("Error: Missing id in delete event", {
				status: 400,
			})
		}

		await deleteUser(id)

		return new Response("User deleted", { status: 200 })
	}

	return new Response("Webhook received", { status: 200 })
}
