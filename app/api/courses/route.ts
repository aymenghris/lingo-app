import { createCourse, getCourses } from "@database/queries"
import { insertCourseSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"
import { createListHandler } from "@/utils/admin-handler"

export const GET = createListHandler({
	resourceName: "courses",
	fetchAll: getCourses,
})

export const POST = async (request: NextRequest) => {
	const body = await request.json()

	const validatedBody = insertCourseSchema.parse(body)

	const course = await createCourse(validatedBody)

	return NextResponse.json(course)
}
