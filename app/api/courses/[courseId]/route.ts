import { deleteCourse, getCourseById, updateCourse } from "@database/queries"
import { updateCourseSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"

type RouteParams<T> = { params: Promise<T> }

export const GET = async (
	_request: NextRequest,
	{ params }: RouteParams<{ courseId: string }>,
) => {
	const { courseId } = await params
	const course = await getCourseById(Number(courseId))

	return NextResponse.json(course)
}

export const PUT = async (
	request: NextRequest,
	{ params }: RouteParams<{ courseId: string }>,
) => {
	const { courseId } = await params

	const body = await request.json()
	const validatedBody = updateCourseSchema.parse(body)

	const course = await updateCourse(Number(courseId), validatedBody)

	return NextResponse.json(course)
}

export const DELETE = async (
	_request: NextRequest,
	{ params }: RouteParams<{ courseId: string }>,
) => {
	const { courseId } = await params

	const course = await deleteCourse(Number(courseId))

	return NextResponse.json(course)
}
