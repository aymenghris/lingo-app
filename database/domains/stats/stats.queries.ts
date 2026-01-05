import { stats } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const getUsersStats = cache(async () => {
	const userId = await getUserId()
	const [data] = await db.select().from(stats).where(eq(stats.userId, userId))

	return data
})
