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

	const { currentChallenge, challenges, quizMode } =
		useQuizSessionStoreSelector()

	const { selectedOptionId, incrementPercentage, setChallengeStatus } =
		useQuizInteractionStoreSelector()

	const { incrementHearts, decrementHearts } = useUserStoreSelector()

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
			processCorrectAnswer(quizMode, lessonId, currentChallenge.id)
				.then(() => {
					if (quizMode === "practice") incrementHearts()
				})
				.catch(() =>
					toast.error("Something went wrong. Please try again."),
				)
		})
	}

	const handleWrongAnswer = () => {
		startTransition(() => {
			processWrongAnswer(quizMode, currentChallenge.lessonId)
				.then(() => {
					sfx.incorrect.play()
					setChallengeStatus("wrong")
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
