import { createOption } from "@seeds/utils/create-content"

// Lesson 4: Colors

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'red'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "blue", false, 1),
	createOption("es", challengeId, "red", true, 2),
	createOption("es", challengeId, "green", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'azul'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "green", false, 1, false), // false = no media
	createOption("en", challengeId, "red", false, 2, false),
	createOption("en", challengeId, "blue", true, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'green'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "green", true, 1),
	createOption("es", challengeId, "red", false, 2),
	createOption("es", challengeId, "yellow", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'amarillo'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "yellow", true, 1, false),
	createOption("en", challengeId, "blue", false, 2, false),
	createOption("en", challengeId, "green", false, 3, false),
]

const spanishLesson4ChallengeOptions = [
	...getChallenge1Options(12),
	...getChallenge2Options(13),
	...getChallenge3Options(14),
	...getChallenge4Options(15),
]

export { spanishLesson4ChallengeOptions }
