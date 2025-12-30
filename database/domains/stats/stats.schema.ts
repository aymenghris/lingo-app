import { relations } from "drizzle-orm"
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"
import { users } from "@/database/schemas"

export const stats = pgTable("users_stats", {
	id: serial("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	hearts: integer("hearts").notNull().default(5),
	points: integer("points").notNull().default(500),
})

export const statsRelation = relations(stats, ({ one }) => ({
	user: one(users, {
		fields: [stats.userId],
		references: [users.id],
	}),
}))
