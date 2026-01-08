"use client"

import { Header } from "@lesson/Header"
import { type FC, useState } from "react"
import type { ChallengeWithOptions } from "@/types/challenges.types"

interface QuizProps {
	initialLessonId: number
	initialLessonChallenges: ChallengeWithOptions[]
	initialLessonPercentage: number
	initialHearts: number
	userSubscription: null // TODO: Replace with subscription DB Type
}

export const Quiz: FC<QuizProps> = ({
	initialHearts,
	initialLessonPercentage,
}) => {
	const [hearts, _setHearts] = useState(initialHearts)
	const [percentage, _setPercentage] = useState(initialLessonPercentage)

	return (
		<Header
			hasActiveSubscription={false}
			hearts={hearts}
			percentage={percentage}
		/>
	)
}
