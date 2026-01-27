import { useEffect } from "react"
import { useChallengeInteraction } from "@/hooks/useChallengeInteraction"
import { useHeartsModal, usePracticeModal } from "@/stores/use-modal-store"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"
import { useUserStoreSelector } from "@/stores/use-user-store"

export const useQuiz = () => {
	const { currentChallenge, nextChallenge, quizMode } =
		useQuizSessionStoreSelector()

	const { selectedOptionId, challengeStatus, resetInteraction } =
		useQuizInteractionStoreSelector()

	const { hearts } = useUserStoreSelector()

	const { openModal: openHeartModal } = useHeartsModal()
	const { openModal: openPracticeModal } = usePracticeModal()

	useEffect(() => {
		if (quizMode === "practice") {
			openPracticeModal()
		}
	}, [quizMode, openPracticeModal])

	const { checkAnswer, handleCorrectAnswer, handleWrongAnswer } =
		useChallengeInteraction()

	const title =
		currentChallenge.type === "assist"
			? "select the correct meaning"
			: currentChallenge.question

	const onContinue = () => {
		if (!selectedOptionId) return

		if (hearts === 0 && quizMode !== "practice") {
			openHeartModal()
			resetInteraction()
			return
		}

		if (challengeStatus === "correct") {
			// User succeeded, clicked continue to go next
			nextChallenge()
			resetInteraction()
			return
		}

		if (challengeStatus === "wrong") {
			// User failed, clicked continue to try again (or lose heart)
			resetInteraction()
			return
		}

		// Status is "none", so we check the answer
		const result = checkAnswer()

		if (result === "correct") {
			handleCorrectAnswer()
		}

		if (result === "wrong") {
			handleWrongAnswer()
		}
	}

	return {
		currentChallenge,
		title,
		onContinue,
	}
}
