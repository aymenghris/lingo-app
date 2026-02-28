import type { challengeOptions } from "@database/schemas"

export type ChallengeOption = typeof challengeOptions.$inferSelect
export type ChallengeOptionInsert = typeof challengeOptions.$inferInsert
