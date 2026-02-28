import { lessons } from "@database/schemas"
import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod"

export const selectLessonSchema = createSelectSchema(lessons)
export const insertLessonSchema = createInsertSchema(lessons)
export const updateLessonSchema = createUpdateSchema(lessons)
