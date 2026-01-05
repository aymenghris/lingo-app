import { challenges } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { cache } from "react"
import { getCompletedChallengesIds } from "@/database/domains/completed-content/completed-challenges/completed-challenges.queries"
import { db } from "@/database/drizzle"

export const getChallenges = cache(async (lessonId: number) => {
	return db
		.select()
		.from(challenges)
		.where(eq(challenges.lessonId, lessonId))
		.orderBy(challenges.placement)
})

export const getChallengesWithCompletedStatus = cache(
	async (lessonId: number) => {
		const challenges = await getChallenges(lessonId)
		const completedChallenges = await getCompletedChallengesIds()

		return challenges.map((challenge) => {
			const completed = completedChallenges.includes(challenge.id)
			return { ...challenge, completed }
		})
	},
)

export const getFirstChallenge = cache(async (lessonId: number) => {
	const [firstChallenge] = await db
		.select()
		.from(challenges)
		.where(
			and(eq(challenges.lessonId, lessonId), eq(challenges.placement, 1)),
		)
		.limit(1)

	if (!firstChallenge) {
		throw new Error(`First challenge not found for lessonId: ${lessonId}`)
	}

	return firstChallenge
})
