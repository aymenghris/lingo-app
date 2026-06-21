"use server"

import {
	getNextLesson,
	getUserActiveEnrollment,
	insertCompletedLesson,
	updateCurrentLessonId,
} from "@database/queries"
import { revalidatePath } from "next/cache"
import { getUserId } from "@/utils/clerk"

export const processLessonCompletion = async () => {
	const userId = await getUserId()

	const { currentLessonId, courseId } = await getUserActiveEnrollment()

	await insertCompletedLesson(userId, currentLessonId)

	const nextLesson = await getNextLesson(currentLessonId)

	if (nextLesson) {
		await updateCurrentLessonId(userId, courseId, nextLesson.id)
	}

	revalidatePath("/learn")
}
