import { toast } from "sonner"
import { processCorrectAnswer } from "@/actions/process-correct-answer"
import { processWrongAnswer } from "@/actions/process-wrong-answer"
import { useSyncedTransition } from "@/hooks/useSyncedTransition"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"
import { useUserStoreSelector } from "@/stores/use-user-store"
import { sfx } from "@/utils/play-quiz-sounds"

export const useChallengeInteraction = () => {
	const [_, startTransition] = useSyncedTransition()

	const { lessonId, currentChallenge, challenges, quizMode } =
		useQuizSessionStoreSelector()

	const { selectedOptionId, incrementPercentage, setChallengeStatus } =
		useQuizInteractionStoreSelector()

	const { hasSubscription, incrementHearts, decrementHearts } =
		useUserStoreSelector()

	const checkAnswer = () => {
		const correctOption = currentChallenge.options.find(
			(opt) => opt.isCorrect,
		)

		if (correctOption?.id === selectedOptionId) {
			return "correct"
		} else {
			return "wrong"
		}
	}

	const handleCorrectAnswer = () => {
		sfx.correct.play()
		setChallengeStatus("correct")
		incrementPercentage(100 / challenges.length)

		startTransition(() => {
			processCorrectAnswer(lessonId, currentChallenge.id)
				.then(() => {
					if (quizMode === "practice") incrementHearts()
				})
				.catch(() =>
					toast.error("Something went wrong. Please try again."),
				)
		})
	}

	const handleWrongAnswer = () => {
		sfx.incorrect.play()
		setChallengeStatus("wrong")

		if (hasSubscription || quizMode === "practice") {
			return
		}

		startTransition(() => {
			processWrongAnswer(currentChallenge.lessonId)
				.then(() => {
					decrementHearts()
				})
				.catch(() =>
					toast.error("Something went wrong. Please try again."),
				)
		})
	}

	return {
		checkAnswer,
		handleCorrectAnswer,
		handleWrongAnswer,
	}
}
