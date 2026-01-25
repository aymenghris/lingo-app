import { challenges } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"

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
