import {
	getCourseById,
	getFirstChallenge,
	getFirstLesson,
	getFirstUnit,
} from "@database/queries"
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
	const firstChallenge = await getFirstChallenge(firstLesson.id)

	await db.insert(enrollments).values({
		userId: userId,
		courseId: courseId,
		currentUnitId: firstUnit.id,
		currentLessonId: firstLesson.id,
		currentChallengeId: firstChallenge.id,
		isActive: true,
	})

	console.log(
		`Successfully added new enrollment for userId: ${userId} and courseId: ${courseId}.`,
	)
}

export const getUserEnrollments = async (userId: string) => {
	const enrolments = await db
		.select()
		.from(enrollments)
		.where(eq(enrollments.userId, userId))

	if (!enrolments) {
		console.log(`No enrollments found for userId: ${userId}.`)
		return null
	}

	console.log(`Successfully retrieved enrollments for userId: ${userId}.`)
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

		if (!enrolment) {
			console.log(
				`No enrollment data found for userId: ${userId} and courseId: ${courseId}.`,
			)
			return null
		}

		console.log(
			`Successfully retrieved enrollment data for userId: ${userId} and courseId: ${courseId}.`,
		)

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

	console.log(
		`Successfully retrieved active enrollment for userId: ${userId}.`,
	)

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

	if (!activeCourse) {
		console.log(`No active course ID found for userId: ${userId}.`)
		return null
	}

	console.log(
		`Successfully retrieved active course ID for userId: ${userId}.`,
	)

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

	console.log(
		`Successfully retrieved enrolled courseIds for userId: ${userId}.`,
	)
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

	console.log(
		`Successfully set enrollments to inactive for userId: ${userId}.`,
	)
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

	console.log(
		`Successfully updated active course for userId: ${userId} to courseId: ${courseId}.`,
	)
}
