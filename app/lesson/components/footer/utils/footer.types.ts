import type { ChallengeStatus } from "@/types/challenges.types"
import type { QuizState } from "@/types/quiz-types"

export interface FooterTypes {
	lessonId?: number
	onCheckSolution: () => void
	challengeStatus: ChallengeStatus
	quizState: QuizState
	disabled: boolean
}
