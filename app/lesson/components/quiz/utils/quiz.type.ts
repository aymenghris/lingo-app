import type { ChallengeWithOptions } from "@/types/challenges.types"
import type { QuizMode } from "@/types/quiz-types"

export interface QuizType {
	initialLessonId: number
	initialChallenges: ChallengeWithOptions[]
	initialHearts: number
	initialPercentage: number
	initialQuizMode: QuizMode
	isSubscribed: boolean
}
