import type { QuizType } from "@lesson/components/quiz/utils/quiz.type"
import { useRef } from "react"
import { useQuizInteractionStore } from "@/stores/use-quiz-interaction-store"
import { useQuizSessionStore } from "@/stores/use-quiz-session-store"
import { useUserStore } from "@/stores/use-user-store"

type InitQuizStore = QuizType

export const useInitQuizStores = ({
	initialLessonId,
	initialChallenges,
	initialHearts,
	initialPercentage,
	initialQuizMode,
	isSubscribed,
}: InitQuizStore) => {
	const initialized = useRef(false)

	// Run once, synchronously, before any subscription
	if (!initialized.current) {
		// .getState() = direct access, no React involvement
		useUserStore.getState().initHearts(initialHearts)
		useUserStore.getState().setSubscription(isSubscribed)
		useQuizInteractionStore.getState().initPercentage(initialPercentage)

		useQuizSessionStore
			.getState()
			.initSession(initialLessonId, initialChallenges, initialQuizMode)

		initialized.current = true
	}

	// After init, subscribe to verify
	return useQuizSessionStore((state) => state.isInitialized)
}
