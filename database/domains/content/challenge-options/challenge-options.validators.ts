import { challengeOptions } from "@database/schemas"
import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod"

export const selectChallengeOptionSchema = createSelectSchema(challengeOptions)
export const insertChallengeOptionSchema = createInsertSchema(challengeOptions)
export const updateChallengeOptionSchema = createUpdateSchema(challengeOptions)
