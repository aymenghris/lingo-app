import type { ChallengeStatus, ChallengeTypes } from "@/types/challenges.types"

export interface ChallengeCardTypes {
	isOptionSelected: boolean
	challengeStatus: ChallengeStatus
	challengeType: ChallengeTypes
	disabled: boolean
}
