import type { ChallengeStatus } from "@/types/challenges.types"
import type { QuizState } from "@/types/quiz-types"

const BUTTON_CONFIGS = {
	completed: { text: "continue", variant: "secondary" },
	wrong: { text: "retry", variant: "danger" },
	correct: { text: "next", variant: "secondary" },
	none: { text: "check", variant: "secondary" },
} as const

export const getCheckButtonConfig = (
	challengeStatus: ChallengeStatus,
	quizState: QuizState,
) => {
	if (quizState === "completed") return BUTTON_CONFIGS.completed

	return BUTTON_CONFIGS[challengeStatus]
}
