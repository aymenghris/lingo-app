import { createUnit, getAllUnits } from "@database/queries"
import { insertUnitSchema } from "@database/validators"
import { type NextRequest, NextResponse } from "next/server"
import { createListHandler } from "@/utils/admin-handler"

export const GET = createListHandler({
	resourceName: "units",
	fetchAll: getAllUnits,
})

export const POST = async (request: NextRequest) => {
	const body = await request.json()

	const validatedBody = insertUnitSchema.parse(body)

	const unit = await createUnit(validatedBody)

	return NextResponse.json(unit)
}
