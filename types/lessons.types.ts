import type { challenges, lessons } from "@database/schemas"

export type LessonState = "completed" | "current" | "locked"

export type LessonInsert = typeof lessons.$inferInsert

export type LessonsWithChallenges = typeof lessons.$inferSelect & {
	state: LessonState
	challenges: (typeof challenges.$inferSelect & { completed: boolean })[]
}
