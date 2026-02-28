import {
	deleteChallenge,
	getChallenge,
	updateChallenge,
} from "@database/queries"
import { updateChallengeSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"

type RouteParams<T> = { params: Promise<T> }

export const GET = async (
	_request: NextRequest,
	{ params }: RouteParams<{ challengeId: number }>,
) => {
	const { challengeId } = await params
	const challenge = await getChallenge(challengeId)

	return NextResponse.json(challenge)
}

export const PUT = async (
	request: NextRequest,
	{ params }: RouteParams<{ challengeId: number }>,
) => {
	const { challengeId } = await params

	const body = await request.json()
	const validatedBody = updateChallengeSchema.parse(body)

	const challenge = await updateChallenge(challengeId, validatedBody)

	return NextResponse.json(challenge)
}

export const DELETE = async (
	_request: NextRequest,
	{ params }: RouteParams<{ challengeId: number }>,
) => {
	const { challengeId } = await params

	const challenge = await deleteChallenge(challengeId)

	return NextResponse.json(challenge)
}
