import { courses, lessons } from "@database/schemas"
import { relations } from "drizzle-orm"
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core"

export const units = pgTable("units", {
	id: serial("id").primaryKey(),
	title: varchar("title").notNull(),
	description: varchar("description").notNull(),
	courseId: integer("course_id")
		.references(() => courses.id, { onDelete: "cascade" })
		.notNull(),
	placement: integer("placement").notNull(),
})

export const unitsRelation = relations(units, ({ one, many }) => ({
	course: one(courses, {
		fields: [units.courseId],
		references: [courses.id],
	}),
	lessons: many(lessons),
}))
