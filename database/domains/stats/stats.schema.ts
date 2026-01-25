import { users } from "@database/schemas"
import { relations } from "drizzle-orm"
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"

export const usersStats = pgTable("users_stats", {
	id: serial("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	hearts: integer("hearts").notNull().default(5),
	points: integer("points").notNull().default(500),
})

export const statsRelation = relations(usersStats, ({ one }) => ({
	user: one(users, {
		fields: [usersStats.userId],
		references: [users.id],
	}),
}))
