import { courses } from "@database/schemas"
import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod"

export const selectCourseSchema = createSelectSchema(courses)
export const insertCourseSchema = createInsertSchema(courses)
export const updateCourseSchema = createUpdateSchema(courses)
