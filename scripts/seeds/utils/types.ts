import type {
	challengeOptions,
	challenges,
	courses,
	lessons,
	units,
} from "@database/schemas"

export type Course = typeof courses.$inferInsert
export type Unit = typeof units.$inferInsert
export type Lesson = typeof lessons.$inferInsert
export type Challenge = typeof challenges.$inferInsert
export type ChallengeOptions = typeof challengeOptions.$inferInsert
