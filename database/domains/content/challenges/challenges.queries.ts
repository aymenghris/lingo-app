import { getUserActiveEnrollment } from "@database/queries"
import { challenges } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
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

		const { currentChallengePlacement } = await getUserActiveEnrollment()

		return challenges.map((challenge) => {
			const completed = challenge.placement < currentChallengePlacement
			return { ...challenge, completed }
		})
	},
)
