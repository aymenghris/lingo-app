import { auth } from "@clerk/nextjs/server"
import { courses, userProgress } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"

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

export const updateExistingProgress = async (
	userId: string,
	courseId: number,
) => {
	await db
		.update(userProgress)
		.set({ activeCourseId: courseId })
		.where(eq(userProgress.userId, userId))
}

export const createNewProgress = async (
	userId: string,
	courseId: number,
	user: { firstName: string | null; imageUrl: string },
) => {
	await db.insert(userProgress).values({
		userId,
		activeCourseId: courseId,
		userName: user.firstName || "User",
		userImageSrc: user.imageUrl || "",
	})
}
