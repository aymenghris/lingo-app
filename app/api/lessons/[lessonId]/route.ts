import { deleteLesson, getLessonById, updateLesson } from "@database/queries"
import { updateLessonSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"

type RouteParams<T> = { params: Promise<T> }

export const GET = async (
	_request: NextRequest,
	{ params }: RouteParams<{ lessonId: string }>,
) => {
	const { lessonId } = await params
	const lesson = await getLessonById(Number(lessonId))

	return NextResponse.json(lesson)
}

export const PUT = async (
	request: NextRequest,
	{ params }: RouteParams<{ lessonId: string }>,
) => {
	const { lessonId } = await params

	const body = await request.json()
	const validatedBody = updateLessonSchema.parse(body)

	const lesson = await updateLesson(Number(lessonId), validatedBody)

	return NextResponse.json(lesson)
}

export const DELETE = async (
	_request: NextRequest,
	{ params }: RouteParams<{ lessonId: string }>,
) => {
	const { lessonId } = await params

	const lesson = await deleteLesson(Number(lessonId))

	return NextResponse.json(lesson)
}
