import { challenges, userProgress } from "@database/schemas"
import { relations } from "drizzle-orm"
import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core"

export const challengeProgress = pgTable("challenge_progress", {
	id: serial("id").primaryKey(),
	userId: text("user_id")
		.references(() => userProgress.userId, { onDelete: "cascade" })
		.notNull(),
	challengeId: integer("challenge_id")
		.references(() => challenges.id, { onDelete: "cascade" })
		.notNull(),
	isCompleted: boolean("is_completed").notNull().default(false),
})

export const challengeProgressRelation = relations(
	challengeProgress,
	({ one }) => ({
		challenge: one(challenges, {
			fields: [challengeProgress.challengeId],
			references: [challenges.id],
		}),
	}),
)
