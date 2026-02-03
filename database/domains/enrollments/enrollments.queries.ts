import { getCourseById, getFirstLesson, getFirstUnit } from "@database/queries"
import { enrollments } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const addUserNewEnrollment = async (
	userId: string,
	courseId: number,
) => {
	// Check if the user already has enrollments
	const hasEnrollments = await isUserHasEnrollments(userId)

	if (hasEnrollments) {
		await setEnrollmentsInactive(userId)
	}

	const firstUnit = await getFirstUnit(courseId)
	const firstLesson = await getFirstLesson(firstUnit.id)

	await db.insert(enrollments).values({
		userId: userId,
		courseId: courseId,
		currentLessonId: firstLesson.id,
		isActive: true,
	})
}

export const getUserEnrollments = async (userId: string) => {
	const enrolments = await db
		.select()
		.from(enrollments)
		.where(eq(enrollments.userId, userId))

	if (!enrolments) return null
}

export const getUserEnrollment = cache(
	async (userId: string, courseId: number) => {
		const [enrolment] = await db
			.select()
			.from(enrollments)
			.where(
				and(
					eq(enrollments.userId, userId),
					eq(enrollments.courseId, courseId),
				),
			)

		if (!enrolment) return null

		return enrolment
	},
)

export const getUserActiveEnrollment = cache(async () => {
	const userId = await getUserId()

	const [activeEnrollment] = await db
		.select()
		.from(enrollments)
		.where(
			and(eq(enrollments.userId, userId), eq(enrollments.isActive, true)),
		)

	if (!activeEnrollment)
		throw new Error(`No active enrollment found for userId: ${userId}.`)

	return activeEnrollment
})

export const getUserActiveCourseId = async () => {
	const userId = await getUserId()

	const [activeCourse] = await db
		.select({ courseId: enrollments.courseId })
		.from(enrollments)
		.where(
			and(eq(enrollments.userId, userId), eq(enrollments.isActive, true)),
		)

	if (!activeCourse) return null

	return activeCourse.courseId
}

export const getUserActiveCourse = async () => {
	const activeCourseId = await getUserActiveCourseId()
	if (!activeCourseId) return undefined

	return await getCourseById(activeCourseId)
}

export const getUserEnrolledCoursesIds = cache(async (userId: string) => {
	const courses = await db
		.select({
			courseId: enrollments.courseId,
		})
		.from(enrollments)
		.where(eq(enrollments.userId, userId))

	if (!courses) {
		return []
	}

	return courses.map((course) => course.courseId)
})

export const isUserEnrolledCourse = async (
	userId: string,
	courseId: number,
) => {
	return !!(await getUserEnrollment(userId, courseId))
}

export const isUserHasEnrollments = async (userId: string) => {
	return !!(await getUserEnrollments(userId))
}

export const isUserHasManyEnrollments = async (userId: string) => {
	const userEnrolledCoursesIds = await getUserEnrolledCoursesIds(userId)
	return userEnrolledCoursesIds.length > 1
}

export const setEnrollmentsInactive = async (userId: string) => {
	await db
		.update(enrollments)
		.set({ isActive: false })
		.where(eq(enrollments.userId, userId))
}

export const updateExistedUserActiveCourse = async (
	userId: string,
	courseId: number,
) => {
	const hasManyEnrollments = await isUserHasManyEnrollments(userId)

	if (hasManyEnrollments) {
		await setEnrollmentsInactive(userId)
	}

	await db
		.update(enrollments)
		.set({ isActive: true })
		.where(
			and(
				eq(enrollments.userId, userId),
				eq(enrollments.courseId, courseId),
			),
		)
}

export const updateCurrentLessonId = async (
	userId: string,
	courseId: number,
	nextLessonId: number,
) => {
	await db
		.update(enrollments)
		.set({ currentLessonId: nextLessonId })
		.where(
			and(
				eq(enrollments.userId, userId),
				eq(enrollments.courseId, courseId),
			),
		)
}
