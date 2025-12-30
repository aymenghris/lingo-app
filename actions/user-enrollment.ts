"use server"

import { revalidatePaths } from "@/actions/utils"
import {
	addUserNewEnrollment,
	isUserEnrolledCourse,
	updateExistedUserActiveCourse,
} from "@/database/queries"
import { getUserId } from "@/utils/clerk"

const PATHS_TO_REVALIDATE = ["/courses", "/learn"] as const

export const upsertUserEnrollment = async (courseId: number) => {
	const userId = await getUserId()

	const isCourseEnrolled = await isUserEnrolledCourse(userId, courseId)

	if (isCourseEnrolled) {
		await updateExistedUserActiveCourse(userId, courseId)
	} else {
		await addUserNewEnrollment(userId, courseId)
	}

	revalidatePaths(PATHS_TO_REVALIDATE)
}
