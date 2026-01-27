import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { useShallow } from "zustand/react/shallow"
import type { ChallengeWithOptions } from "@/types/challenges.types"
import type { QuizMode, QuizState } from "@/types/quiz-types"

interface QuizSessionStore {
	lessonId: number | undefined
	challenges: ChallengeWithOptions[]
	activeIndex: number
	quizMode: QuizMode
	quizState: QuizState
	isInitialized: boolean

	initSession: (
		lessonId: number,
		challenges: ChallengeWithOptions[],
		quizMode: QuizMode,
	) => void

	nextChallenge: () => void
}

const useQuizSessionStore = create<QuizSessionStore>()(
	devtools(
		(set, get) => ({
			lessonId: undefined,
			challenges: [],
			activeIndex: 0,
			quizMode: "learn",
			quizState: "in-progress",
			isInitialized: false,

			initSession: (lessonId, challenges, quizMode) => {
				// Find the first uncompleted challenge
				const uncompleted = challenges.findIndex((c) => !c.completed)

				set({
					lessonId,
					challenges,
					activeIndex: uncompleted === -1 ? 0 : uncompleted,
					quizMode,
					isInitialized: true,
				})
			},

			nextChallenge: () => {
				const { activeIndex, challenges } = get()

				if (activeIndex < challenges.length - 1) {
					set({ activeIndex: activeIndex + 1 })
				} else {
					// No more challenges - mark the quiz as completed
					set({ quizState: "completed" })
				}
			},
		}),
		{ name: "quiz-session-store" },
	),
)

const useQuizSessionStoreSelector = () => {
	return useQuizSessionStore(
		useShallow((state) => ({
			lessonId: state.lessonId,
			challenges: state.challenges,
			activeIndex: state.activeIndex,
			currentChallenge: state.challenges[state.activeIndex],

			quizMode: state.quizMode,
			quizState: state.quizState,

			initSession: state.initSession,
			nextChallenge: state.nextChallenge,
		})),
	)
}

export { useQuizSessionStore, useQuizSessionStoreSelector }
