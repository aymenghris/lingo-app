import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { units } from "@/database/schemas"

export const getUnits = cache(async (courseId: number) => {
	return db.select().from(units).where(eq(units.courseId, courseId))
})
