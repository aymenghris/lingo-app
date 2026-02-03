import { courses, lessons, users } from "@database/schemas"
import { relations } from "drizzle-orm"
import {
	boolean,
	integer,
	pgTable,
	primaryKey,
	text,
	timestamp,
} from "drizzle-orm/pg-core"

export const enrollments = pgTable(
	"users_enrollments",
	{
		userId: text("user_id")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		courseId: integer("course_id")
			.notNull()
			.references(() => courses.id, { onDelete: "cascade" }),
		currentLessonId: integer("current_lesson_id")
			.notNull()
			.references(() => lessons.id),
		isActive: boolean("is_active").notNull(),
		enrollmentDate: timestamp("enrollment_date").defaultNow(),
	},
	(table) => [primaryKey({ columns: [table.userId, table.courseId] })],
)

export const enrollmentRelation = relations(enrollments, ({ one }) => ({
	user: one(users, {
		fields: [enrollments.userId],
		references: [users.id],
	}),
	course: one(courses, {
		fields: [enrollments.courseId],
		references: [courses.id],
	}),
	lesson: one(lessons, {
		fields: [enrollments.currentLessonId],
		references: [lessons.id],
	}),
}))
