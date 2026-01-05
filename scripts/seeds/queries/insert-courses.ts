import * as schema from "@database/schemas"
import { db } from "@/database/drizzle"
import type { Course } from "@/scripts/seeds/utils/types"

export const insertCourses = async (courses: Course[]) => {
	try {
		await db.insert(schema.courses).values(
			courses.map((course) => ({
				id: course.id,
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
