import { CheckButton, PracticeButton } from "@lesson/components/footer/buttons"
import { FooterFeedback } from "@lesson/components/footer/FooterFeedback"
import { getFooterStyles } from "@lesson/components/footer/utils"
import type { FC } from "react"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"

interface FooterProps {
	onCheck: () => void
}

export const Footer: FC<FooterProps> = ({ onCheck }) => {
	const { selectedOptionId, pending, challengeStatus } =
		useQuizInteractionStoreSelector()

	const { lessonId, quizState } = useQuizSessionStoreSelector()

	const disabled =
		pending || (quizState === "in-progress" && !selectedOptionId)

	return (
		<footer className={getFooterStyles({ challengeStatus })}>
			<div className="mx-auto flex h-full max-w-285 items-center justify-between px-6 lg:px-10">
				<FooterFeedback challengeStatus={challengeStatus} />

				<PracticeButton lessonId={lessonId} quizState={quizState} />

				<CheckButton
					onCheckSolution={onCheck}
					challengeStatus={challengeStatus}
					quizState={quizState}
					disabled={disabled}
				/>
			</div>
		</footer>
	)
}
