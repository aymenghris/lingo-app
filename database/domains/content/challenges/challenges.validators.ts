import { challenges } from "@database/schemas"
import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod"

export const selectChallengeSchema = createSelectSchema(challenges)
export const insertChallengeSchema = createInsertSchema(challenges)
export const updateChallengeSchema = createUpdateSchema(challenges)
