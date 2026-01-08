import { getCompletedChallengesIds, getLessonContent } from "@database/queries"

export const getLessonWithProgress = async (lessonId: number) => {
	const [lesson, completedIds] = await Promise.all([
		getLessonContent(lessonId),
		getCompletedChallengesIds(),
	])

	// Optimization: Convert array to Set for O(1) lookup
	// If completedIds is [1, 2, 3], checking Set.has(2) is faster than Array.includes(2)
	const completedSet = new Set(completedIds)

	return {
		...lesson,
		challenges: lesson.challenges.map((challenge) => ({
			...challenge,
			completed: completedSet.has(challenge.id),
		})),
	}
}
