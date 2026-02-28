import { challengeOptions, challenges, lessons } from "@database/schemas"
import { and, asc, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import type { LessonInsert } from "@/types/lessons.types"

export const createLesson = async (lesson: LessonInsert) => {
	const [createdLesson] = await db.insert(lessons).values(lesson).returning()
	return createdLesson
}

export const getLessons = async (unitId: number) => {
	return db
		.select()
		.from(lessons)
		.where(eq(lessons.unitId, unitId))
		.orderBy(lessons.placement)
}

export const getAllLessons = cache(async () => {
	return db.select().from(lessons).orderBy(lessons.placement)
})

export const getLessonById = cache(async (lessonId: number) => {
	const [lesson] = await db
		.select()
		.from(lessons)
		.where(eq(lessons.id, lessonId))
		.limit(1)

	return lesson
})

export const getLessonContent = async (lessonId: number) => {
	const lessonContent = await db.query.lessons.findFirst({
		where: eq(lessons.id, lessonId),
		with: {
			challenges: {
				orderBy: asc(challenges.placement),
				with: {
					options: {
						orderBy: asc(challengeOptions.placement),
					},
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

export const updateLesson = async (
	lessonId: number,
	updatedLesson: Partial<LessonInsert>,
) => {
	const [lesson] = await db
		.update(lessons)
		.set(updatedLesson)
		.where(eq(lessons.id, lessonId))
		.returning()

	return lesson
}

export const deleteLesson = async (lessonId: number) => {
	const [lesson] = await db
		.delete(lessons)
		.where(eq(lessons.id, lessonId))
		.returning()

	return lesson
}
