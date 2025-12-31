import { getCourseById } from "@database/queries"
import { enrollments } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const addUserNewEnrollment = async (
	userId: string,
	courseId: number,
) => {
	try {
		// Check if the user already has enrollments
		const hasEnrollments = await isUserHasEnrollments(userId)
		if (hasEnrollments) {
			await setEnrollmentsInactive(userId)
		}

		// Insert the new enrollment
		await db.insert(enrollments).values({
			userId: userId,
			courseId: courseId,
			isActive: true,
		})

		console.log(
			`Successfully added new enrollment for userId: ${userId} and courseId: ${courseId}.`,
		)
	} catch (error) {
		console.error(
			`Error adding new enrollment for userId: ${userId} and courseId ${courseId}:`,
			error,
		)
		throw new Error(
			`Failed to add new enrollment for userId: ${userId} and courseId ${courseId}.`,
		)
	}
}

export const getUserEnrollments = async (userId: string) => {
	try {
		const data = await db
			.select()
			.from(enrollments)
			.where(eq(enrollments.userId, userId))

		if (!data.length) {
			console.log(`No enrollments found for userId: ${userId}.`)
			return null
		}

		console.log(`Successfully retrieved enrollments for userId: ${userId}.`)
	} catch (error) {
		console.error(
			`Error retrieving enrollments for userId: ${userId}`,
			error,
		)
	}
}

export const getUserEnrollment = cache(
	async (userId: string, courseId: number) => {
		try {
			const data = await db
				.select()
				.from(enrollments)
				.where(
					and(
						eq(enrollments.userId, userId),
						eq(enrollments.courseId, courseId),
					),
				)

			if (!data.length) {
				console.log(
					`No enrollment data found for userId: ${userId} and courseId: ${courseId}.`,
				)
				return null
			}

			console.log(
				`Successfully retrieved enrollment data for userId: ${userId} and courseId: ${courseId}.`,
			)

			return data[0]
		} catch (error) {
			console.error(
				`Error retrieving enrollment data for userId: ${userId} and courseId: ${courseId}.`,
				error,
			)
			return null
		}
	},
)

export const getUserActiveEnrollment = cache(async () => {
	const userId = await getUserId()

	const data = await db
		.select()
		.from(enrollments)
		.where(
			and(eq(enrollments.userId, userId), eq(enrollments.isActive, true)),
		)

	if (!data.length)
		throw new Error(`No active enrollment found for userId: ${userId}.`)

	console.log(
		`Successfully retrieved active enrollment for userId: ${userId}.`,
	)

	return data[0]
})

export const getUserActiveCourseId = async () => {
	const userId = await getUserId()

	const data = await db
		.select({ courseId: enrollments.courseId })
		.from(enrollments)
		.where(
			and(eq(enrollments.userId, userId), eq(enrollments.isActive, true)),
		)

	if (!data.length) {
		console.log(`No active course ID found for userId: ${userId}.`)
		return null
	}

	console.log(
		`Successfully retrieved active course ID for userId: ${userId}.`,
	)

	return data[0].courseId
}

export const getUserActiveCourse = async () => {
	const activeCourseId = await getUserActiveCourseId()
	if (!activeCourseId) return undefined

	return await getCourseById(activeCourseId)
}

export const getUserEnrolledCoursesIds = cache(async (userId: string) => {
	try {
		const courses = await db
			.select({
				courseId: enrollments.courseId,
			})
			.from(enrollments)
			.where(eq(enrollments.userId, userId))
		console.log(
			`Successfully retrieved enrolled courseIds for userId: ${userId}.`,
		)
		return courses.map((course) => course.courseId)
	} catch (error) {
		console.error(
			`Error retrieving enrolled courseIds for userId: ${userId}.`,
			error,
		)

		return []
	}
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
	try {
		await db
			.update(enrollments)
			.set({ isActive: false })
			.where(eq(enrollments.userId, userId))

		console.log(
			`Successfully set enrollments to inactive for userId: ${userId}.`,
		)
	} catch (error) {
		console.error(
			`Error setting enrollments to inactive for userId: ${userId}:`,
			error,
		)
		throw new Error(
			`Failed to set enrollments to inactive for userId: ${userId}.`,
		)
	}
}

export const updateExistedUserActiveCourse = async (
	userId: string,
	courseId: number,
) => {
	try {
		const hasManyEnrollments = await isUserHasManyEnrollments(userId)
		if (hasManyEnrollments) {
			await setEnrollmentsInactive(userId)

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

		console.log(
			`Successfully updated active course for userId: ${userId} to courseId: ${courseId}.`,
		)
	} catch (error) {
		console.error(
			`Error updating active course for userId: ${userId} to courseId: ${courseId}:`,
			error,
		)
		throw new Error(
			`Failed to update active course for userId: ${userId} to courseId: ${courseId}.`,
		)
	}
}
