import type { challengeOptions, challenges } from "@database/schemas"

export type ChallengeWithCompletedState = typeof challenges.$inferSelect & {
	completed: boolean
}

export type ChallengeWithOptions = ChallengeWithCompletedState & {
	challengeOptions: (typeof challengeOptions.$inferSelect)[]
}
