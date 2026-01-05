import { challenges } from "@database/schemas"
import { relations } from "drizzle-orm"
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const completedChallenges = pgTable("completed_challenges", {
	id: serial("id").primaryKey(),
	userId: text("user_id").notNull(),
	challengeId: integer("challenge_id")
		.notNull()
		.references(() => challenges.id),
	completedAt: timestamp("completed_at").defaultNow(),
})

export const completedChallengesRelation = relations(
	completedChallenges,
	({ one }) => ({
		challenge: one(challenges, {
			fields: [completedChallenges.challengeId],
			references: [challenges.id],
		}),
	}),
)
