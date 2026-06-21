import { createOption } from "@seeds/utils/create-content"

// Lesson 1: Greetings

/**
 * Challenge 1: Select
 * Question: "Which one of these means 'hello'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "goodbye", false, 1),
	createOption("es", challengeId, "hello", true, 2),
	createOption("es", challengeId, "thank you", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'adiós'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "please", false, 1, false), // false = no media
	createOption("en", challengeId, "goodbye", true, 2, false),
	createOption("en", challengeId, "hello", false, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these means 'thank you'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "thank you", true, 1),
	createOption("es", challengeId, "hello", false, 2),
	createOption("es", challengeId, "please", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'por favor'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "thank you", false, 1, false), // false = no media
	createOption("en", challengeId, "please", true, 2, false),
	createOption("en", challengeId, "goodbye", false, 3, false),
]

const spanishLesson1ChallengeOptions = [
	...getChallenge1Options(16),
	...getChallenge2Options(17),
	...getChallenge3Options(18),
	...getChallenge4Options(19),
]

export { spanishLesson1ChallengeOptions }
