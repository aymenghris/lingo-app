import { units } from "@database/schemas"
import { and, asc, eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import type { UnitInsert } from "@/types/unit.types"

export const createUnit = async (unit: UnitInsert) => {
	const [createdUnit] = await db.insert(units).values(unit).returning()
	return createdUnit
}

export const getUnits = cache(async (courseId: number) => {
	return db
		.select()
		.from(units)
		.where(eq(units.courseId, courseId))
		.orderBy(units.placement)
})

export const getAllUnits = cache(async () => {
	return db.select().from(units).orderBy(units.placement)
})

export const getUnitById = cache(async (unitId: number) => {
	const [unit] = await db
		.select()
		.from(units)
		.where(eq(units.id, unitId))
		.limit(1)
		
	return unit
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

	return unitsContent
})

export const getFirstUnit = cache(async (courseId: number) => {
	const [firstUnit] = await db
		.select()
		.from(units)
		.where(and(eq(units.courseId, courseId), eq(units.placement, 1)))
		.limit(1)

	return firstUnit
})

export const updateUnit = async (unitId: number, unit: Partial<UnitInsert>) => {
	const [updatedUnit] = await db
		.update(units)
		.set(unit)
		.where(eq(units.id, unitId))
		.returning()

	return updatedUnit
}

export const deleteUnit = async (unitId: number) => {
	const [deletedUnit] = await db
		.delete(units)
		.where(eq(units.id, unitId))
		.returning()

	return deletedUnit
}
