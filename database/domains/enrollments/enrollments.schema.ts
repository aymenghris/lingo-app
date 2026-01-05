import { challenges, courses, lessons, units, users } from "@database/schemas"
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
		currentUnitId: integer("current_unit_id")
			.notNull()
			.references(() => units.id),
		currentLessonId: integer("current_lesson_id")
			.notNull()
			.references(() => lessons.id),
		currentChallengeId: integer("current_challenge_id")
			.notNull()
			.references(() => challenges.id),
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
	unit: one(units, {
		fields: [enrollments.currentUnitId],
		references: [units.id],
	}),
	lesson: one(lessons, {
		fields: [enrollments.currentLessonId],
		references: [lessons.id],
	}),
	challenge: one(challenges, {
		fields: [enrollments.currentChallengeId],
		references: [challenges.id],
	}),
}))
