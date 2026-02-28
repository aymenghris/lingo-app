import { challenges } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import type { ChallengeInsert } from "@/types/challenges.types"

export const createChallenge = async (challenge: ChallengeInsert) => {
	const [createdChallenge] = await db
		.insert(challenges)
		.values(challenge)
		.returning()
	return createdChallenge
}

export const getChallenges = async (lessonId: number) => {
	return db
		.select()
		.from(challenges)
		.where(eq(challenges.lessonId, lessonId))
		.orderBy(challenges.placement)
}

export const getAllChallenges = cache(async () => {
	return db.select().from(challenges).orderBy(challenges.placement)
})

export const getChallenge = cache(async (challengeId: number) => {
	const [challenge] = await db
		.select()
		.from(challenges)
		.where(eq(challenges.id, challengeId))
		.limit(1)

	return challenge
})

export const getFirstChallenge = cache(async (lessonId: number) => {
	const [firstChallenge] = await db
		.select()
		.from(challenges)
		.where(
			and(eq(challenges.lessonId, lessonId), eq(challenges.placement, 1)),
		)
		.limit(1)

	return firstChallenge
})

export const updateChallenge = async (
	challengeId: number,
	updatedChallenge: Partial<ChallengeInsert>,
) => {
	const [challenge] = await db
		.update(challenges)
		.set(updatedChallenge)
		.where(eq(challenges.id, challengeId))
		.returning()

	return challenge
}

export const deleteChallenge = async (challengeId: number) => {
	const [challenge] = await db
		.delete(challenges)
		.where(eq(challenges.id, challengeId))
		.returning()

	return challenge
}
