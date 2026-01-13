import { useCallback, useState } from "react"
import type {
	ChallengeStatus,
	ChallengeWithOptions,
} from "@/types/challenges.types"

interface UseQuizProps {
	initialChallenges: ChallengeWithOptions[]
	initialHearts: number
	initialPercentage: number
}

export const useQuiz = ({
	initialChallenges,
	initialHearts,
	initialPercentage,
}: UseQuizProps) => {
	const [hearts, setHearts] = useState(initialHearts)
	const [percentage, setPercentage] = useState(initialPercentage)
	const [selectedOption, setSelectedOption] = useState<number>()
	const [status, setStatus] = useState<ChallengeStatus>("none")
	const [challenges] = useState(initialChallenges)

	const [activeIndex, setActiveIndex] = useState(() => {
		const uncompleted = initialChallenges.findIndex(
			(challenge) => !challenge.completed,
		)
		return uncompleted === -1 ? 0 : uncompleted
	})

	const currentChallenge = challenges[activeIndex]

	const selectOption = useCallback(
		(id: number) => {
			if (status !== "none") return
			setSelectedOption(id)
		},
		[status],
	)

	const title =
		currentChallenge.type === "assist"
			? "select the correct meaning"
			: currentChallenge.question

	return {
		hearts,
		percentage,
		selectedOption,
		status,
		currentChallenge,
		title,
		selectOption,
		setHearts,
		setPercentage,
		setStatus,
		setActiveIndex,
	}
}
