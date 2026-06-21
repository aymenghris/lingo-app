import { createOption } from "@seeds/utils/create-content"

// Lesson 3: Review — Food & Drink

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'the apple'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "milk", false, 1),
	createOption("es", challengeId, "apple", true, 2),
	createOption("es", challengeId, "bread", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'el agua'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "bread", false, 1, false), // false = no media
	createOption("en", challengeId, "water", true, 2, false),
	createOption("en", challengeId, "milk", false, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'the bread'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "bread", true, 1),
	createOption("es", challengeId, "apple", false, 2),
	createOption("es", challengeId, "milk", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'la leche'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "milk", true, 1, false), // false = no media
	createOption("en", challengeId, "apple", false, 2, false),
	createOption("en", challengeId, "water", false, 3, false),
]

const spanishLesson3ChallengeOptions = [
	...getChallenge1Options(42),
	...getChallenge2Options(43),
	...getChallenge3Options(44),
	...getChallenge4Options(45),
]

export { spanishLesson3ChallengeOptions }
