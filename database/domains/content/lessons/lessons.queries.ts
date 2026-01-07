import { lessons } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { db } from "@/database/drizzle"

export const getLessons = async (unitId: number) => {
	return db
		.select()
		.from(lessons)
		.where(eq(lessons.unitId, unitId))
		.orderBy(lessons.placement)
}

export const getLesson = async (lessonId: number) => {
	const [lesson] = await db
		.select()
		.from(lessons)
		.where(eq(lessons.id, lessonId))
		.limit(1)

	return lesson
}

export const getLessonContent = async (lessonId: number) => {
	const lessonContent = await db.query.lessons.findFirst({
		where: eq(lessons.id, lessonId),
		with: {
			challenges: {
				with: {
					challengeOptions: true,
				},
			},
		},
	})

	if (!lessonContent) {
		throw new Error("Lesson not found")
	}

	return lessonContent
}

export const getFirstLesson = async (unitId: number) => {
	const [firstLesson] = await db
		.select()
		.from(lessons)
		.where(and(eq(lessons.unitId, unitId), eq(lessons.placement, 1)))
		.limit(1)

	if (!firstLesson) {
		throw new Error(`First lesson not found for unitId: ${unitId}`)
	}

	return firstLesson
}
