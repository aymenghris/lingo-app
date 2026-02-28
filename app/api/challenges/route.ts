import { createChallenge, getAllChallenges } from "@database/queries"
import { insertChallengeSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"
import { createListHandler } from "@/utils/admin-handler"

export const GET = createListHandler({
	resourceName: "challenges",
	fetchAll: getAllChallenges,
})

export const POST = async (request: NextRequest) => {
	const body = await request.json()

	const validatedBody = insertChallengeSchema.parse(body)

	const challenge = await createChallenge(validatedBody)

	return NextResponse.json(challenge)
}
