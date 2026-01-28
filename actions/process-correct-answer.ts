"use server"

import {
	getUserStats,
	incrementHeartsAndPoints,
	incrementPoints,
	insertCompletedChallenge,
} from "@database/queries"
import { revalidatePaths } from "@/actions/utils"
import type { QuizMode } from "@/types/quiz-types"
import { getUserId } from "@/utils/clerk"

const PATHS_TO_REVALIDATE = [
	"/learn",
	"/lesson",
	"/quests",
	"/leaderboard",
] as const

export const processCorrectAnswer = async (
	quizMode: QuizMode,
	lessonId: number | undefined,
	challengeId: number,
) => {
	const userId = await getUserId()
	const userStats = await getUserStats()

	if (quizMode === "practice") {
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
