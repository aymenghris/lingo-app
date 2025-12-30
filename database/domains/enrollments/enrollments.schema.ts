import { relations } from "drizzle-orm"
import {
	boolean,
	integer,
	pgTable,
	primaryKey,
	text,
	timestamp,
} from "drizzle-orm/pg-core"
import { courses, users } from "@/database/schemas"

export const enrollments = pgTable(
	"users_enrollments",
	{
		userId: text("user_id")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		courseId: integer("course_id")
			.notNull()
			.references(() => courses.id, { onDelete: "cascade" }),
		currentUnitPlacement: integer("current_unit_placement")
			.notNull()
			.default(1),
		currentLessonPlacement: integer("current_activity_placement")
			.notNull()
			.default(1),
		currentChallengePlacement: integer("current_exercise_placement")
			.notNull()
			.default(1),
		isActive: boolean("is_active").default(false).notNull(),
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
}))
