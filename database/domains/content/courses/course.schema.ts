import { relations } from "drizzle-orm"
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"
import { enrollments, units } from "@/database/schemas"

export const courses = pgTable("courses", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	code: text("code").notNull(),
	placement: integer("placement").notNull(),
})

export const coursesRelations = relations(courses, ({ many }) => ({
	enrollments: many(enrollments),
	units: many(units),
}))
