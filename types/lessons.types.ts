import type { challenges, lessons } from "@database/schemas"

export type LessonState = "completed" | "current" | "locked"

export type LessonsWithChallenges = typeof lessons.$inferSelect & {
	state: LessonState
	challenges: (typeof challenges.$inferSelect & { completed: boolean })[]
}
