import { courses } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import type { CourseInsert } from "@/types/course.types"

export const createCourse = async (newCourse: CourseInsert) => {
	const [course] = await db.insert(courses).values(newCourse).returning()
	return course
}

export const getCourses = cache(async () => {
	return db.select().from(courses).orderBy(courses.placement)
})

export const getCourseById = cache(async (courseId: number) => {
	const [course] = await db
		.select()
		.from(courses)
		.where(eq(courses.id, courseId))
		.limit(1)

	return course
})

export const updateCourse = async (
	courseId: number,
	updatedCourse: Partial<CourseInsert>,
) => {
	const [course] = await db.update(courses).set(updatedCourse).where(eq(courses.id, courseId)).returning()
	return course
}

export const deleteCourse = async (courseId: number) => {
	const [course] = await db.delete(courses).where(eq(courses.id, courseId)).returning()
	return course
}