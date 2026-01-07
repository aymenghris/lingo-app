import type {
	ChallengeWithCompletedState,
	ChallengeWithOptions,
} from "@/types/challenges.types"

type Challenge = ChallengeWithCompletedState | ChallengeWithOptions

export const lessonProgressPercentage = (challenges: Challenge[]) => {
	const completedChallenges = challenges.filter(
		(challenge) => challenge.completed,
	)

	return Math.floor((completedChallenges.length / challenges.length) * 100)
}
