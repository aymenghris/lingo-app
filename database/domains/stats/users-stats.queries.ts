import { users, usersStats } from "@database/schemas"
import { desc, eq } from "drizzle-orm"
import { cache } from "react"
import { DEFAULT_HEARTS, POINTS_TO_REFILL } from "@/constants"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

export const createUserStats = async (userId: string) => {
	await db.insert(usersStats).values({ userId })
}

export const getUserStats = cache(async () => {
	const userId = await getUserId()

	const [data] = await db
		.select()
		.from(usersStats)
		.where(eq(usersStats.userId, userId))
		.limit(1)

	return data
})

export const getTopTenUsers = cache(async () => {
	return db
		.select({
			userId: usersStats.userId,
			fullName: users.fullName,
			avatar: users.avatar,
			points: usersStats.points,
		})
		.from(usersStats)
		.innerJoin(users, eq(users.id, usersStats.userId))
		.orderBy(desc(usersStats.points))
		.limit(10)
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

export const incrementHeartsAndDecrementPoints = async (
	userId: string,
	prevHearts: number,
	prevPoints: number,
) => {
	await db
		.update(usersStats)
		.set({
			hearts: Math.min(prevHearts + 1, DEFAULT_HEARTS),
			points: Math.max(prevPoints - POINTS_TO_REFILL),
		})
		.where(eq(usersStats.userId, userId))
}
