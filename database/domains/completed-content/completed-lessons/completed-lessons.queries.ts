import { completedLessons } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const getCompletedLessonIds = cache(async () => {
	const userId = await getUserId()

	const data = await db
		.select({ lessonId: completedLessons.lessonId })
		.from(completedLessons)
		.where(eq(completedLessons.userId, userId))

	return data.map((item) => item.lessonId)
})
