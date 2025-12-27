import { challengeOptions, challengeProgress, lessons } from "@database/schemas"
import { relations } from "drizzle-orm"
import { integer, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core"

export const challengesEnum = pgEnum("challenge_type", ["select", "assist"])

export const challenges = pgTable("challenges", {
	id: serial("id").primaryKey(),
	lessonId: integer("lesson_id")
		.references(() => lessons.id, { onDelete: "cascade" })
		.notNull(),
	type: challengesEnum("type").notNull(),
	question: varchar("question").notNull(),
	placement: integer("placement").notNull(),
})

export const challengesRelation = relations(challenges, ({ one, many }) => ({
	lesson: one(lessons, {
		fields: [challenges.lessonId],
		references: [lessons.id],
	}),
	challengeOptions: many(challengeOptions),
	challengeProgress: many(challengeProgress),
}))
