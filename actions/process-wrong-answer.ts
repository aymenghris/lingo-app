"use server"

import { PATHS_TO_REVALIDATE, revalidatePaths } from "@/actions/utils"
import {
	decrementHearts,
	getUserStats,
} from "@/database/domains/stats/stats.queries"
import { getUserId } from "@/utils/clerk"

export const processWrongAnswer = async (lessonId: number) => {
	const userId = await getUserId()
	const userStats = await getUserStats()

	await decrementHearts(userId, userStats.hearts)

	revalidatePaths([...PATHS_TO_REVALIDATE, `/lesson/${lessonId}`])
}
