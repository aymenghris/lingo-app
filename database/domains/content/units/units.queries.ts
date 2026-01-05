import { units } from "@database/schemas"
import { and, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"

export const getUnits = cache(async (courseId: number) => {
	return db
		.select()
		.from(units)
		.where(eq(units.courseId, courseId))
		.orderBy(units.placement)
})

export const getFirstUnit = cache(async (courseId: number) => {
	const [firstUnit] = await db
		.select()
		.from(units)
		.where(and(eq(units.courseId, courseId), eq(units.placement, 1)))
		.limit(1)

	if (!firstUnit) {
		throw new Error(`No first unit found for courseId: ${courseId}`)
	}

	return firstUnit
})
