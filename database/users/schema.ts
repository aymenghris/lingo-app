import { courses } from "@database/schemas"
import { relations } from "drizzle-orm"
import { integer, pgTable, text } from "drizzle-orm/pg-core"

export const userProgress = pgTable("user_progress", {
	userId: text("user_id").primaryKey(),
	userName: text("user_name").notNull().default("User"),
	userImageSrc: text("user_image_src").notNull().default(""),
	activeCourseId: integer("active_course_id").references(() => courses.id, {
		onDelete: "cascade",
	}),
	hearts: integer("hearts").notNull().default(5),
	points: integer("points").notNull().default(50),
})

export const userProgressRelations = relations(userProgress, ({ one }) => ({
	activeCourse: one(courses, {
		fields: [userProgress.activeCourseId],
		references: [courses.id],
	}),
}))
