import { challenges } from "@database/schemas"
import { relations } from "drizzle-orm"
import { boolean, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core"

export const challengeOptions = pgTable("challenge_options", {
	id: serial("id").primaryKey(),
	challengeId: integer("challenge_id")
		.references(() => challenges.id, { onDelete: "cascade" })
		.notNull(),
	isCorrect: boolean("is_correct").notNull(),
	textContent: varchar("text_content").notNull(),
	imageSrc: varchar("image_src"),
	audioSrc: varchar("audio_src"),
	placement: integer("placement").notNull(),
})

export const challengeOptionsRelation = relations(
	challengeOptions,
	({ one }) => ({
		challenge: one(challenges, {
			fields: [challengeOptions.challengeId],
			references: [challenges.id],
		}),
	}),
)
