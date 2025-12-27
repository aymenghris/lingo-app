"use server"

import {
	createNewProgress,
	getUserProgress,
	updateExistingProgress,
} from "@database/queries"
import { redirect } from "next/navigation"
import {
	getAuthenticatedUser,
	revalidatePaths,
	validateCourse,
} from "@/actions/utils"

const PATHS_TO_REVALIDATE = ["/courses", "/learn"] as const
const REDIRECT_PATH = "/learn"

export const upsertUserProgress = async (courseId: number) => {
	const { userId, user } = await getAuthenticatedUser()

	await validateCourse(courseId)

	const existingProgress = await getUserProgress()

	if (existingProgress) {
		await updateExistingProgress(userId, courseId)
	} else {
		await createNewProgress(userId, courseId, user)
	}

	revalidatePaths(PATHS_TO_REVALIDATE)
	redirect(REDIRECT_PATH)
}
