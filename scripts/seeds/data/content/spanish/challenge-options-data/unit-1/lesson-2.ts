import { createOption } from "@seeds/utils/create-content"

// Lesson 2: Food & Drink

/**
 * Challenge 1: Select
 * Question: "which one of these is 'the apple'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "bread", false, 1),
	createOption("es", challengeId, "apple", true, 2),
	createOption("es", challengeId, "milk", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "select the correct meaning: 'el pan'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "milk", false, 1, false),
	createOption("en", challengeId, "apple", false, 2, false),
	createOption("en", challengeId, "bread", true, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "which one of these is 'the milk'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "milk", true, 1),
	createOption("es", challengeId, "apple", false, 2),
	createOption("es", challengeId, "water", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'el agua'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "water", true, 1, false),
	createOption("en", challengeId, "bread", false, 2, false),
	createOption("en", challengeId, "apple", false, 3, false),
]

const spanishLesson2ChallengeOptions = [
	...getChallenge1Options(5),
	...getChallenge2Options(6),
	...getChallenge3Options(7),
	...getChallenge4Options(8),
]

export { spanishLesson2ChallengeOptions }
