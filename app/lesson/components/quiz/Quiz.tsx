"use client"

import { Challenge } from "@lesson/components/challenge/Challenge"
import { Footer } from "@lesson/components/footer/Footer"
import { Header } from "@lesson/components/Header"
import { QuestionBubble, QuizCard, QuizLayout } from "@lesson/components/quiz"
import type { FC } from "react"
import { useQuiz } from "@/hooks/useQuiz"
import type { ChallengeWithOptions } from "@/types/challenges.types"

interface QuizProps {
	initialLessonId: number
	initialChallenges: ChallengeWithOptions[]
	initialPercentage: number
	initialHearts: number
	userSubscription: null // TODO: Replace with subscription DB Type
}

export const Quiz: FC<QuizProps> = ({
	initialChallenges,
	initialHearts,
	initialPercentage,
}) => {
	const {
		hearts,
		percentage,
		selectedOption,
		status,
		currentChallenge,
		title,
		selectOption,
	} = useQuiz({
		initialChallenges,
		initialHearts,
		initialPercentage,
	})

	const header = (
		<Header
			hasActiveSubscription={false}
			hearts={hearts}
			percentage={percentage}
		/>
	)

	const footer = (
		<Footer
			onCheckSolution={() => {}}
			status={status}
			disabled={!selectedOption}
		/>
	)

	return (
		<QuizLayout header={header} footer={footer}>
			<QuizCard title={title}>
				{currentChallenge.type === "assist" && (
					<QuestionBubble question={currentChallenge.question} />
				)}

				<Challenge
					options={currentChallenge.challengeOptions}
					onSelect={selectOption}
					type={currentChallenge.type}
					status={status}
					selectedOption={selectedOption}
					disabled={false}
				/>
			</QuizCard>
		</QuizLayout>
	)
}
