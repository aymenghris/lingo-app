import { usersStats } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

const DEFAULT_HEARTS = 5

export const createUserStats = async (userId: string) => {
	await db.insert(usersStats).values({ userId })
}

export const getUserStats = cache(async () => {
	const userId = await getUserId()

	const [data] = await db
		.select()
		.from(usersStats)
		.where(eq(usersStats.userId, userId))

	return data
})

export const decrementHearts = async (userId: string, prevHearts: number) => {
	await db
		.update(usersStats)
		.set({ hearts: Math.max(prevHearts - 1, 0) })
		.where(eq(usersStats.userId, userId))
}

export const incrementPoints = async (userId: string, prevPoints: number) => {
	await db
		.update(usersStats)
		.set({ points: prevPoints + 10 })
		.where(eq(usersStats.userId, userId))
}

export const incrementHeartsAndPoints = async (
	userId: string,
	prevHearts: number,
	prevPoints: number,
) => {
	await db
		.update(usersStats)
		.set({
			hearts: Math.min(prevHearts + 1, DEFAULT_HEARTS),
			points: prevPoints + 10,
		})
		.where(eq(usersStats.userId, userId))
}
