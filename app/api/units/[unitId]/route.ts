import { deleteUnit, getUnitById, updateUnit } from "@database/queries"
import { updateUnitSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"

type RouteParams<T> = { params: Promise<T> }

export const GET = async (
	_request: NextRequest,
	{ params }: RouteParams<{ unitId: string }>,
) => {
	const { unitId } = await params
	const unit = await getUnitById(Number(unitId))

	return NextResponse.json(unit)
}

export const PUT = async (
	request: NextRequest,
	{ params }: RouteParams<{ unitId: string }>,
) => {
	const { unitId } = await params

	const body = await request.json()
	const validatedBody = updateUnitSchema.parse(body)

	const unit = await updateUnit(Number(unitId), validatedBody)

	return NextResponse.json(unit)
}

export const DELETE = async (
	_request: NextRequest,
	{ params }: RouteParams<{ unitId: string }>,
) => {
	const { unitId } = await params

	const unit = await deleteUnit(Number(unitId))

	return NextResponse.json(unit)
}
