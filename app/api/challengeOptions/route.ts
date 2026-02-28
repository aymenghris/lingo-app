import {
	createChallengeOption,
	getAllChallengeOptions,
} from "@database/queries"
import { insertChallengeOptionSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"
import { createListHandler } from "@/utils/admin-handler"

export const GET = createListHandler({
	resourceName: "challengeOptions",
	fetchAll: getAllChallengeOptions,
})

export const POST = async (request: NextRequest) => {
	const body = await request.json()

	const validatedBody = insertChallengeOptionSchema.parse(body)

	const challengeOption = await createChallengeOption(validatedBody)

	return NextResponse.json(challengeOption)
}
