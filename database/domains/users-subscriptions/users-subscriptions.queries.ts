import { usersSubscriptions } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import { getUserId } from "@/utils/clerk"

const DAY_IN_MS = 1000 * 60 * 60 * 24

export const getUserSubscription = cache(async () => {
	const userId = await getUserId()

	const [data] = await db
		.select()
		.from(usersSubscriptions)
		.where(eq(usersSubscriptions.userId, userId))
		.limit(1)

	if (!data) return null

	const isActive =
		!!data.stripePriceId &&
		data.stripeCurrentPeriodEnd.getTime() + DAY_IN_MS > Date.now()

	return {
		...data,
		isActive,
	}
})
