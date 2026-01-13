import type { ChallengeStatus } from "@/types/challenges.types"

export interface FooterTypes {
	onCheckSolution: () => void
	status: ChallengeStatus | "completed"
	lessonId?: number
	disabled?: boolean
}
