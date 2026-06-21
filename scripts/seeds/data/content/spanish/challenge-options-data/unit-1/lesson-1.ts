import { createOption } from "@seeds/utils/create-content"

// Lesson 1: Common Nouns

/**
 * Challenge 1: Select
 * Question: "which one of these is 'the man'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "man", true, 1),
	createOption("es", challengeId, "woman", false, 2),
	createOption("es", challengeId, "boy", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "select the correct meaning: 'la mujer'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "boy", false, 1, false), // false = no media
	createOption("en", challengeId, "woman", true, 2, false),
	createOption("en", challengeId, "man", false, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'the boy'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "man", false, 1),
	createOption("es", challengeId, "woman", false, 2),
	createOption("es", challengeId, "boy", true, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'el hombre'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "man", true, 1, false),
	createOption("en", challengeId, "woman", false, 2, false),
	createOption("en", challengeId, "girl", false, 3, false),
]

const spanishLesson1ChallengeOptions = [
	...getChallenge1Options(1),
	...getChallenge2Options(2),
	...getChallenge3Options(3),
	...getChallenge4Options(4),
]

export { spanishLesson1ChallengeOptions }
