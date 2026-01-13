import type { challengeOptions, challenges } from "@database/schemas"

export type ChallengeWithCompletedState = typeof challenges.$inferSelect & {
	completed: boolean
}

export type ChallengeWithOptions = ChallengeWithCompletedState & {
	challengeOptions: (typeof challengeOptions.$inferSelect)[]
}

export type ChallengeStatus = "correct" | "wrong" | "none"

export type ChallengeTypes = typeof challenges.$inferSelect.type
