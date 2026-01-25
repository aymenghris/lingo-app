"use client"

import { ChallengeCard, ChallengeGrid } from "@lesson/components/challenge"
import { Footer } from "@lesson/components/footer/Footer"
import { Header } from "@lesson/components/Header"
import { QuestionBubble, QuizCard, QuizLayout } from "@lesson/components/quiz"
import { useQuiz } from "@/hooks/useQuiz"

export const Quiz = () => {
	const { title, onContinue, currentChallenge } = useQuiz()

	return (
		<QuizLayout
			header={<Header />}
			footer={<Footer onCheck={onContinue} />}
		>
			<QuizCard title={title}>
				{currentChallenge.type === "assist" && (
					<QuestionBubble question={currentChallenge.question} />
				)}

				<ChallengeGrid challengeType={currentChallenge.type}>
					{currentChallenge.options.map((option) => (
						<ChallengeCard
							key={option.id}
							option={option}
							challengeType={currentChallenge.type}
						/>
					))}
				</ChallengeGrid>
			</QuizCard>
		</QuizLayout>
	)
}
