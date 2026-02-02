import * as schema from "@database/schemas"
import type { Course } from "@seeds/types"
import { db } from "@/database/drizzle"

export const insertCourses = async (courses: Course[]) => {
	try {
		await db.insert(schema.courses).values(
			courses.map((course) => ({
				title: course.title,
				code: course.code,
				placement: course.placement,
			})),
		)
		console.log("Courses inserted successfully")
	} catch (error) {
		console.error("Failed to insert courses, Error:", error)
	}
}
