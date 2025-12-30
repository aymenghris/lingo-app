import { challenges, units } from "@database/schemas"
import { relations } from "drizzle-orm"
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core"

export const lessons = pgTable("lessons", {
	id: serial("id").primaryKey(),
	title: varchar("title").notNull(),
	unitId: integer("unit_id")
		.references(() => units.id, { onDelete: "cascade" })
		.notNull(),
	placement: integer("placement").notNull(),
})

export const lessonsRelation = relations(lessons, ({ one, many }) => ({
	unit: one(units, {
		fields: [lessons.unitId],
		references: [units.id],
	}),
	challenges: many(challenges),
}))
