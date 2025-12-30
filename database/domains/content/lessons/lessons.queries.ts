import { eq } from "drizzle-orm"
import { db } from "@/database/drizzle"
import { lessons } from "@database/schemas"

export const getLessons = async (unitId: number) => {
	return db.select().from(lessons).where(eq(lessons.unitId, unitId))
}
