import { createCourse, getCourses } from "@database/queries"
import { insertCourseSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"
import { createListHandler } from "@/utils/admin-handler"
import { getIsAdmin } from "@/utils/clerk"

export const GET = createListHandler({
	resourceName: "courses",
	fetchAll: getCourses,
})

export const POST = async (request: NextRequest) => {
	const isAdmin = await getIsAdmin()

	if (!isAdmin) {
		return NextResponse.json(
			"Access denied. Administrator privileges are required.",
			{ status: 403 },
		)
	}

	const body = await request.json()

	const validatedBody = insertCourseSchema.parse(body)

	const course = await createCourse(validatedBody)

	return NextResponse.json(course)
}
