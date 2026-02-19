"use server"

import {
	decrementHearts,
	getUserStats,
	isUserCompletedLesson,
} from "@database/queries"
import { PATHS_TO_REVALIDATE, revalidatePaths } from "@/actions/utils"
import { getUserId } from "@/utils/clerk"
import { getUserSubscriptionData } from "@/utils/get-user-data"

export const processWrongAnswer = async (lessonId: number) => {
	const [userId, userStats, { isSubscribed }, isPracticeMode] =
		await Promise.all([
			getUserId(),
			getUserStats(),
			getUserSubscriptionData(),
			isUserCompletedLesson(lessonId),
		])

	if (isPracticeMode) {
		return { error: "practice_mode" }
	}

	if (isSubscribed) {
		return { error: "subscribed" }
	}

	if (userStats.hearts === 0) {
		return { error: "out_of_hearts" }
	}

	await decrementHearts(userId, userStats.hearts)

	revalidatePaths([...PATHS_TO_REVALIDATE, `/lesson/${lessonId}`])
}
