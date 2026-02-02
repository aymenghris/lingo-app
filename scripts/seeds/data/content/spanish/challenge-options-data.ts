import { createOption } from "@seeds/utils/create-content"

const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "man", true, 1),
	createOption("es", challengeId, "woman", false, 2),
	createOption("es", challengeId, "robot", false, 3),
]

const getChallenge2Options = (challengeId: number) => [
	createOption("es", challengeId, "man", false, 1, false), // false = no media
	createOption("es", challengeId, "woman", true, 2, false),
	createOption("es", challengeId, "robot", false, 3, false),
]

const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "man", false, 1),
	createOption("es", challengeId, "woman", false, 2),
	createOption("es", challengeId, "robot", true, 3),
]

const spanishChallengeOptions = [
	...getChallenge1Options(1),
	...getChallenge2Options(2),
	...getChallenge3Options(3),

	// Repeat the pattern for testing
	...getChallenge1Options(4),
	...getChallenge2Options(5),
	...getChallenge3Options(6),
]

export { spanishChallengeOptions }
