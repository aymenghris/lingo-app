"use server"

import {
	getUserStats,
	incrementHeartsAndPoints,
	incrementPoints,
	insertCompletedChallenge,
	isUserCompletedLesson,
} from "@database/queries"
import { revalidatePaths } from "@/actions/utils"
import { getUserId } from "@/utils/clerk"

const PATHS_TO_REVALIDATE = [
	"/learn",
	"/lesson",
	"/quests",
	"/leaderboard",
] as const

export const processCorrectAnswer = async (
	lessonId: number | undefined,
	challengeId: number,
) => {
	if (!lessonId) return

	const [userId, userStats, isPracticeMode] = await Promise.all([
		getUserId(),
		getUserStats(),
		isUserCompletedLesson(lessonId),
	])

	if (isPracticeMode) {
		await incrementHeartsAndPoints(
			userId,
			userStats.hearts,
			userStats.points,
		)
	} else {
		await insertCompletedChallenge(userId, challengeId)
		await incrementPoints(userId, userStats.points)
	}

	revalidatePaths([...PATHS_TO_REVALIDATE, `/lesson/${lessonId}`])
}
