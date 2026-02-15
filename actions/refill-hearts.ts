"use server"

import {
	getUserStats,
	incrementHeartsAndDecrementPoints,
} from "@database/queries"
import { PATHS_TO_REVALIDATE, revalidatePaths } from "@/actions/utils"
import { MAX_HEARTS, POINTS_TO_REFILL } from "@/constants"
import { getUserId } from "@/utils/clerk"

export const refillHearts = async () => {
	const userId = await getUserId()
	const userStats = await getUserStats()

	if (userStats.hearts === MAX_HEARTS) {
		throw new Error("Hearts are already full")
	}

	if (userStats.points < POINTS_TO_REFILL) {
		throw new Error("Not enough points")
	}

	await incrementHeartsAndDecrementPoints(
		userId,
		userStats.hearts,
		userStats.points,
	)

	revalidatePaths(PATHS_TO_REVALIDATE)
}
