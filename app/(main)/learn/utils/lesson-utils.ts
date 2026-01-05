import {
	getChallengesWithCompletedStatus,
	getCompletedLessonIds,
	getUserActiveEnrollment,
} from "@database/queries"
import { cache } from "react"

export const determineLessonState = async (lessonId: number) => {
	const { currentLessonId } = await getUserActiveEnrollment()
	const completedLessonsIds = await getCompletedLessonIds()

	if (lessonId === currentLessonId) {
		return "current"
	}

	if (completedLessonsIds.includes(lessonId)) {
		return "completed"
	} else {
		return "locked"
	}
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
