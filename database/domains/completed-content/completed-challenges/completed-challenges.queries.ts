import { completedChallenges } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const getCompletedChallengesIds = cache(async () => {
	const userId = await getUserId()

	const data = await db
		.select({ challengeId: completedChallenges.challengeId })
		.from(completedChallenges)
		.where(eq(completedChallenges.userId, userId))

	return data.map((item) => item.challengeId)
})
