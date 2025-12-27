import { units, userProgress } from "@database/schemas"
import { relations } from "drizzle-orm"
import { pgTable, serial, text } from "drizzle-orm/pg-core"

export const courses = pgTable("courses", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	imageSrc: text("image_src").notNull(),
})

export const coursesRelations = relations(courses, ({ many }) => ({
	usersProgress: many(userProgress),
	units: many(units),
}))
