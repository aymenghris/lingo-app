"use server"

import { PATHS_TO_REVALIDATE, revalidatePaths } from "@/actions/utils"
import {
	decrementHearts,
	getUserStats,
} from "@/database/domains/stats/stats.queries"
import type { QuizMode } from "@/types/quiz-types"
import { getUserId } from "@/utils/clerk"

export const processWrongAnswer = async (
	quizMode: QuizMode,
	lessonId: number,
) => {
	const userId = await getUserId()
	const userStats = await getUserStats()

	if (quizMode !== "practice") {
		await decrementHearts(userId, userStats.hearts)
	}

	revalidatePaths([...PATHS_TO_REVALIDATE, `/lesson/${lessonId}`])
}
