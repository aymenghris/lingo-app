import type { QuizType } from "@lesson/components/quiz/utils/quiz.type"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"
import { useUserStoreSelector } from "@/stores/use-user-store"

type InitQuizStore = QuizType

import { useRef } from "react"

export const useInitQuizStores = ({
	initialLessonId,
	initialChallenges,
	initialHearts,
	initialPercentage,
	initialQuizMode,
}: InitQuizStore) => {
	const initialized = useRef(false)

	const { initHearts } = useUserStoreSelector()
	const { initPercentage } = useQuizInteractionStoreSelector()
	const { initSession } = useQuizSessionStoreSelector()

	if (!initialized.current) {
		initHearts(initialHearts)

		initPercentage(initialPercentage)

		initSession(initialLessonId, initialChallenges, initialQuizMode)

		initialized.current = true
	}
}
