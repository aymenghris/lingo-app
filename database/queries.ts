import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { courses, userProgress } from "@/database/schema"

export const getCourses = cache(async () => {
	return db.select().from(courses).orderBy(courses.id)
})

export const getCourseById = cache(async (courseId: number) => {
	const [course] = await db
		.select()
		.from(courses)
		.where(eq(courses.id, courseId))
		.limit(1)

	return course
})

export const getUserProgress = cache(async () => {
	const { userId } = await auth()

	if (!userId) {
		return null
	}

	const rows = await db
		.select()
		.from(userProgress)
		.leftJoin(courses, eq(userProgress.activeCourseId, courses.id))
		.where(eq(userProgress.userId, userId))
		.limit(1)

	const data = rows[0]

	// Handle the result shape
	// The builder returns: { user_progress: {...}, courses: {...} }
	// We map it back to the original shape: { ...user_progress, activeCourse: {...} }
	return data
		? {
				...data.user_progress,
				activeCourse: data.courses,
			}
		: null
})
