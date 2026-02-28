import { challengeOptions } from "@database/schemas"
import { eq } from "drizzle-orm"
import { cache } from "react"
import { db } from "@/database/drizzle"
import type { ChallengeOptionInsert } from "@/types/challenge-options.types"

export const createChallengeOption = async (
	challengeOption: ChallengeOptionInsert,
) => {
	const [createdOption] = await db
		.insert(challengeOptions)
		.values(challengeOption)
		.returning()
	return createdOption
}

export const getChallengeOptions = async (challengeId: number) => {
	return db
		.select()
		.from(challengeOptions)
		.where(eq(challengeOptions.challengeId, challengeId))
		.orderBy(challengeOptions.placement)
}

export const getAllChallengeOptions = cache(async () => {
	return db.select().from(challengeOptions).orderBy(challengeOptions.placement)
})

export const getChallengeOptionById = cache(async (optionId: number) => {
	const [option] = await db
		.select()
		.from(challengeOptions)
		.where(eq(challengeOptions.id, optionId))
		.limit(1)

	return option
})

export const updateChallengeOption = async (
	optionId: number,
	updatedOption: Partial<ChallengeOptionInsert>,
) => {
	const [option] = await db
		.update(challengeOptions)
		.set(updatedOption)
		.where(eq(challengeOptions.id, optionId))
		.returning()

	return option
}

export const deleteChallengeOption = async (optionId: number) => {
	const [option] = await db
		.delete(challengeOptions)
		.where(eq(challengeOptions.id, optionId))
		.returning()

	return option
}
