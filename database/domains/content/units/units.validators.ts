import { units } from "@database/schemas"
import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod"

export const selectUnitSchema = createSelectSchema(units)
export const insertUnitSchema = createInsertSchema(units)
export const updateUnitSchema = createUpdateSchema(units)
