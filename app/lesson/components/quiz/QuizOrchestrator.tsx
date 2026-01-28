"use client"

import { FinishScreen } from "@lesson/components/finish-screen/FinishScreen"
import { Quiz } from "@lesson/components/quiz"
import type { QuizType } from "@lesson/components/quiz/utils/quiz.type"
import type { FC } from "react"
import { useInitQuizStores } from "@/hooks/useInitQuizStore"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"

type QuizOrchestratorProps = QuizType

export const QuizOrchestrator: FC<QuizOrchestratorProps> = (props) => {
	const isReady = useInitQuizStores({ ...props })
	const { quizState } = useQuizSessionStoreSelector()

	if (!isReady) return null

	if (quizState === "completed") {
		return <FinishScreen />
	}

	return <Quiz />
}
