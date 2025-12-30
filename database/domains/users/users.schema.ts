import { enrollments, stats } from "@database/schemas"
import { relations } from "drizzle-orm"
import { pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
	id: text("id").primaryKey(),
	username: text("username").notNull().unique(),
	fullName: text("full_name").notNull(),
	email: text("email").notNull().unique(),
	avatar: text("avatar").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const userRelation = relations(users, ({ many, one }) => ({
	enrollments: many(enrollments),
	stats: one(stats, {
		fields: [users.id],
		references: [stats.userId],
	}),
}))
