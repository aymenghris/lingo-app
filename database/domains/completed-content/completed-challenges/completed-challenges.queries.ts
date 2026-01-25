import { completedChallenges } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const getCompletedChallengesIds = cache(async () => {
	const userId = await getUserId()

	const rows = await db
		.select({ challengeId: completedChallenges.challengeId })
		.from(completedChallenges)
		.where(eq(completedChallenges.userId, userId))

	return new Set(rows.map((row) => row.challengeId))
})

export const getCompletedChallenge = async (challengeId: number) => {
	const userId = await getUserId()

	const [challenge] = await db
		.select()
		.from(completedChallenges)
		.where(
			and(
				eq(completedChallenges.userId, userId),
				eq(completedChallenges.challengeId, challengeId),
			),
		)

	if (!challenge) return undefined

	return challenge
}

export const insertCompletedChallenge = async (
	userId: string,
	challengeId: number,
) => {
	await db.insert(completedChallenges).values({ userId, challengeId })
}

export const isUserCompletedChallenge = async (challengeId: number) => {
	return !!(await getCompletedChallenge(challengeId))
}
