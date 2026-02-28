import type { challenges } from "@database/schemas"
import type { ChallengeOption } from "@/types/challenge-options.types"

export type Challenge = typeof challenges.$inferSelect
export type ChallengeInsert = typeof challenges.$inferInsert

export type ChallengeWithCompletedState = Challenge & {
	completed: boolean
}

export type ChallengeWithOptions = ChallengeWithCompletedState & {
	options: ChallengeOption[]
}

export type ChallengeStatus = "correct" | "wrong" | "none"

export type ChallengeTypes = Challenge["type"]
