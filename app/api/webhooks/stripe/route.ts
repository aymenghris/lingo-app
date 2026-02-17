import { usersSubscriptions } from "@database/schemas"
import { eq } from "drizzle-orm"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import type Stripe from "stripe"
import { db } from "@/database/drizzle"
import { stripe } from "@/lib/stripe"

export const POST = async (req: Request) => {
	const body = await req.text()
	const signature = (await headers()).get("Stripe-Signature") as string

	let event: Stripe.Event

	// Verify the webhook is actually from Stripe
	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			process.env.STRIPE_WEBHOOK_SECRET as string,
		)
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error"
		return new NextResponse(`Webhook error: ${message}`, {
			status: 400,
		})
	}

	const session = event.data.object as Stripe.Checkout.Session

	//  When someone FIRST subscribes
	if (event.type === "checkout.session.completed") {
		const subscription = await stripe.subscriptions.retrieve(
			session.subscription as string,
		)

		if (!session?.metadata?.userId) {
			return new NextResponse("User ID is required", { status: 400 })
		}

		await db.insert(usersSubscriptions).values({
			userId: session.metadata.userId,
			stripeSubscriptionId: subscription.id,
			stripeCustomerId: subscription.customer as string,
			stripePriceId: subscription.items.data[0].price.id,
			stripeCurrentPeriodEnd: new Date(
				subscription.items.data[0].current_period_end * 1000,
			),
		})
	}

	// When subscription RENEWS (monthly payment goes through)
	if (event.type === "invoice.payment_succeeded") {
		const subscription = await stripe.subscriptions.retrieve(
			session.subscription as string,
		)

		await db
			.update(usersSubscriptions)
			.set({
				stripePriceId: subscription.items.data[0].price.id,
				stripeCurrentPeriodEnd: new Date(
					subscription.items.data[0].current_period_end * 1000,
				),
			})
			.where(eq(usersSubscriptions.stripeSubscriptionId, subscription.id))
	}

	return new NextResponse(null, { status: 200 })
}
