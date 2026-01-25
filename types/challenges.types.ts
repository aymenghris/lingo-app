import type { challengeOptions, challenges } from "@database/schemas"

export type Challenge = typeof challenges.$inferSelect

export type ChallengeWithCompletedState = typeof challenges.$inferSelect & {
	completed: boolean
}

export type ChallengeWithOptions = ChallengeWithCompletedState & {
	options: (typeof challengeOptions.$inferSelect)[]
}

export type ChallengeStatus = "correct" | "wrong" | "none"

export type ChallengeTypes = typeof challenges.$inferSelect.type
