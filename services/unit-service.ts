import {
	getCompletedChallengesIds,
	getCompletedLessonIds,
	getUnitsContent,
	getUserActiveEnrollment,
} from "@database/queries"
import type { LessonState } from "@/types/lessons.types"

export const getUnitsWithProgress = async (courseId: number) => {
	const units = await getUnitsContent(courseId)

	const [userEnrollment, completedLessonsIds, completedChallengesIds] =
		await Promise.all([
			getUserActiveEnrollment(),
			getCompletedLessonIds(),
			getCompletedChallengesIds(),
		])

	const currentLessonId = userEnrollment.currentLessonId
	const completedLessonsSet = new Set(completedLessonsIds)
	const completedChallengesSet = new Set(completedChallengesIds)

	const determineStatus = (lessonId: number): LessonState => {
		if (completedLessonsSet.has(lessonId)) {
			return "completed"
		}
		if (lessonId === currentLessonId) {
			return "current"
		}
		return "locked"
	}

	return units.map((unit) => {
		return {
			...unit,
			totalLessons: unit.lessons.length,
			lessons: unit.lessons.map((lesson) => ({
				...lesson,
				state: determineStatus(lesson.id),
				challenges: lesson.challenges.map((challenge) => ({
					...challenge,
					completed: completedChallengesSet.has(challenge.id),
				})),
			})),
		}
	})
}
