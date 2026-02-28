import {
	deleteChallengeOption,
	getChallengeOptionById,
	updateChallengeOption,
} from "@database/queries"
import { updateChallengeOptionSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"

type RouteParams<T> = { params: Promise<T> }

export const GET = async (
	_request: NextRequest,
	{ params }: RouteParams<{ challengeOptionId: string }>,
) => {
	const { challengeOptionId } = await params
	const option = await getChallengeOptionById(Number(challengeOptionId))

	return NextResponse.json(option)
}

export const PUT = async (
	request: NextRequest,
	{ params }: RouteParams<{ challengeOptionId: string }>,
) => {
	const { challengeOptionId } = await params

	const body = await request.json()
	const validatedBody = updateChallengeOptionSchema.parse(body)

	const option = await updateChallengeOption(
		Number(challengeOptionId),
		validatedBody,
	)

	return NextResponse.json(option)
}

export const DELETE = async (
	_request: NextRequest,
	{ params }: RouteParams<{ challengeOptionId: string }>,
) => {
	const { challengeOptionId } = await params

	const option = await deleteChallengeOption(Number(challengeOptionId))

	return NextResponse.json(option)
}
