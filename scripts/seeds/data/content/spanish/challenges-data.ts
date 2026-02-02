import { createChallenge } from "@seeds/utils/create-content"

const getLesson1Challenges = (lessonId: number) => [
	createChallenge(
		lessonId,
		"select",
		1,
		"Question placeholder for challenge 1.",
	),
	createChallenge(
		lessonId,
		"assist",
		2,
		"Question placeholder for challenge 2.",
	),
	createChallenge(
		lessonId,
		"select",
		3,
		"Question placeholder for challenge 3.",
	),
]

const getLesson2Challenges = (lessonId: number) => [
	createChallenge(
		lessonId,
		"assist",
		1,
		"Question placeholder for challenge 1.",
	),
	createChallenge(
		lessonId,
		"select",
		2,
		"Question placeholder for challenge 2.",
	),
	createChallenge(
		lessonId,
		"assist",
		3,
		"Question placeholder for challenge 3.",
	),
]

const spanishChallenges = [
	...getLesson1Challenges(1),

	...getLesson2Challenges(2),

	// Repeat the pattern for testing
	...getLesson1Challenges(3),
]

export { spanishChallenges }
