import { completedLessons, lessons } from "@database/schemas"
import { and, asc, eq, gt } from "drizzle-orm"
import { cache } from "react"
import { getLesson } from "@/database/domains/content/lessons/lessons.queries"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const getCompletedLessonIds = cache(async () => {
	const userId = await getUserId()

	const rows = await db
		.select({ lessonId: completedLessons.lessonId })
		.from(completedLessons)
		.where(eq(completedLessons.userId, userId))

	// Optimization: Convert array to Set for O(1) lookup
	return new Set(rows.map((row) => row.lessonId))
})

export const getCompletedLesson = async (lessonId: number) => {
	const userId = await getUserId()

	const [lesson] = await db
		.select()
		.from(completedLessons)
		.where(
			and(
				eq(completedLessons.userId, userId),
				eq(completedLessons.lessonId, lessonId),
			),
		)
	if (!lesson) return undefined

	return lesson
}

export const insertCompletedLesson = async (
	userId: string,
	lessonId: number,
) => {
	await db.insert(completedLessons).values({ userId, lessonId })
}

export const getNextLesson = async (lessonId: number) => {
	const currentLesson = await getLesson(lessonId)

	// Fnd the next lesson in the same unit with higher placement
	const [nextLesson] = await db
		.select()
		.from(lessons)
		.where(
			and(
				eq(lessons.unitId, currentLesson.unitId),
				gt(lessons.placement, currentLesson.placement),
			),
		)
		.orderBy(asc(lessons.placement))
		.limit(1)

	return nextLesson
}

export const isUserCompletedLesson = async (lessonId: number) => {
	return !!(await getCompletedLesson(lessonId))
}
