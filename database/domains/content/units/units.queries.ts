import { units } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"

export const getUnits = cache(async (courseId: number) => {
	return db.select().from(units).where(eq(units.courseId, courseId))
})
