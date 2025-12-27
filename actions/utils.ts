import { auth, currentUser } from "@clerk/nextjs/server"
import { getCourseById } from "@database/queries"
import { revalidatePath } from "next/cache"

export const revalidatePaths = (paths: readonly string[]) => {
	for (const path of paths) {
		revalidatePath(path)
	}
}

export const getAuthenticatedUser = async () => {
	const [{ userId }, user] = await Promise.all([auth(), currentUser()])

	if (!userId || !user) {
		throw new Error("Unauthorized User")
	}

	return { userId, user }
}

export const validateCourse = async (courseId: number) => {
	const course = await getCourseById(courseId)

	if (!course) {
		throw new Error("Course not found")
	}

	return course
}
