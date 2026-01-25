import {
	getCompletedChallengesIds,
	getCompletedLessonIds,
	getLessonContent,
} from "@database/queries"

export const getLessonWithProgress = async (lessonId: number) => {
	const [lesson, completedLessonsIds] = await Promise.all([
		getLessonContent(lessonId),
		getCompletedLessonIds(),
	])

	const isLessonCompleted = completedLessonsIds.has(lessonId)

	// If the lesson is completed → all challenges are considered completed
	if (isLessonCompleted) {
		return {
			...lesson,
			completed: true,
			challenges: lesson.challenges.map((challenge) => ({
				...challenge,
				completed: true,
			})),
		}
	}

	const completedChallengesIds = await getCompletedChallengesIds()

	return {
		...lesson,
		completed: false,
		challenges: lesson.challenges.map((challenge) => ({
			...challenge,
			completed: completedChallengesIds.has(challenge.id),
		})),
	}
}
