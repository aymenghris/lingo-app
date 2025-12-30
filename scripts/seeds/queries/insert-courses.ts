import { db } from "@/database/drizzle"
import * as schema from "@/database/schemas"
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
	} catch (error) {
		console.error("Error inserting courses:", error)
	}
}
