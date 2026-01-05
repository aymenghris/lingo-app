import { lessons } from "@database/schemas"
import { relations } from "drizzle-orm"
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const completedLessons = pgTable("completed_lessons", {
	id: serial("id").primaryKey(),
	userId: text("user_id").notNull(),
	lessonId: integer("lesson_id")
		.notNull()
		.references(() => lessons.id),
	completedAt: timestamp("completed_at").defaultNow(),
})

export const completedLessonsRelation = relations(
	completedLessons,
	({ one }) => ({
		lesson: one(lessons, {
			fields: [completedLessons.lessonId],
			references: [lessons.id],
		}),
	}),
)
