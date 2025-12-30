import { eq } from "drizzle-orm"
import { db } from "@/database/drizzle"
import { stats } from "@/database/schemas"
import { getUserId } from "@/utils/clerk"

export const getUsersStats = async () => {
	const userId = await getUserId()
	const data = await db.select().from(stats).where(eq(stats.userId, userId))

	return data[0]
}
