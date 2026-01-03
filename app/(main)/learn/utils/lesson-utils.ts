import {
	getChallengesWithCompletedStatus,
	getUserActiveEnrollment,
} from "@database/queries"
import { cache } from "react"

export const determineLessonState = async (lessonPlacement: number) => {
	const { currentLessonPlacement } = await getUserActiveEnrollment()

	if (lessonPlacement === currentLessonPlacement) {
		return "current"
	}

	if (lessonPlacement <= currentLessonPlacement) {
		return "completed"
	}
	return "locked"
}

export const calculateLessonProgressPercentage = cache(
	async (lessonId: number) => {
		const allChallenges = await getChallengesWithCompletedStatus(lessonId)

		const completedChallenges = allChallenges.filter(
			(exercise) => exercise.completed,
		)

		if (completedChallenges.length === 0) return 0

		return Math.floor(
			(completedChallenges.length / allChallenges.length) * 100,
		)
	},
)
