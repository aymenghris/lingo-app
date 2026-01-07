import { units } from "@database/schemas"
import { and, asc, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"

export const getUnits = cache(async (courseId: number) => {
	return db
		.select()
		.from(units)
		.where(eq(units.courseId, courseId))
		.orderBy(units.placement)
})

export const getUnitsContent = cache(async (courseId: number) => {
	const unitsContent = await db.query.units.findMany({
		where: eq(units.courseId, courseId),
		orderBy: asc(units.placement),
		with: {
			lessons: {
				with: {
					challenges: true,
				},
			},
		},
	})

	if (!unitsContent.length) {
		throw new Error("Units not found")
	}

	return unitsContent
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
