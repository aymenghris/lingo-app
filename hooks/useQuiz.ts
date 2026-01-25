import { useChallengeInteraction } from "@/hooks/useChallengeInteraction"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"

export const useQuiz = () => {
	const { getCurrentChallenge, nextChallenge } = useQuizSessionStoreSelector()
	const currentChallenge = getCurrentChallenge()

	const { selectedOptionId, challengeStatus, resetInteraction } =
		useQuizInteractionStoreSelector()

	const { checkAnswer, handleCorrectAnswer, handleWrongAnswer } =
		useChallengeInteraction()

	const title =
		currentChallenge.type === "assist"
			? "select the correct meaning"
			: currentChallenge.question

	const onContinue = () => {
		if (!selectedOptionId) return

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
