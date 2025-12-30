import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { courses } from "@/database/schemas"

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
