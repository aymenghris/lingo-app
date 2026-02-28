import { createLesson, getAllLessons } from "@database/queries"
import { insertLessonSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"
import { createListHandler } from "@/utils/admin-handler"

export const GET = createListHandler({
	resourceName: "lessons",
	fetchAll: getAllLessons,
})

export const POST = async (request: NextRequest) => {
	const body = await request.json()

	const validatedBody = insertLessonSchema.parse(body)

	const lesson = await createLesson(validatedBody)

	return NextResponse.json(lesson)
}
