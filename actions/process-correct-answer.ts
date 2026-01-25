"use server"

import {
	getChallenge,
	getUserStats,
	incrementHeartsAndPoints,
	incrementPoints,
	insertCompletedChallenge,
	isUserCompletedChallenge,
} from "@database/queries"
import { revalidatePaths } from "@/actions/utils"
import { getUserId } from "@/utils/clerk"

const PATHS_TO_REVALIDATE = [
	"/learn",
	"/lesson",
	"/quests",
	"/leaderboard",
] as const

export const processCorrectAnswer = async (challengeId: number) => {
	const userId = await getUserId()

	const userStats = await getUserStats()
	const isChallengeCompleted = await isUserCompletedChallenge(challengeId)
	const challenge = await getChallenge(challengeId)

	if (isChallengeCompleted) {
		await incrementHeartsAndPoints(
			userId,
			userStats.hearts,
			userStats.points,
		)
	} else {
		await insertCompletedChallenge(userId, challengeId)
		await incrementPoints(userId, userStats.points)
	}

	revalidatePaths([...PATHS_TO_REVALIDATE, `/lesson/${challenge.lessonId}`])
}
