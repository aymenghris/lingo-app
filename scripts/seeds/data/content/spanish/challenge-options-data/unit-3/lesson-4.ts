import { createOption } from "@seeds/utils/create-content"

// Lesson 4: Review — Colors & Greetings

/**
 * Challenge 1: Select
 * Question: "Which one of these means 'red'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "blue", false, 1),
	createOption("es", challengeId, "red", true, 2),
	createOption("es", challengeId, "green", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'hola'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "goodbye", false, 1, false),
	createOption("en", challengeId, "hello", true, 2, false),
	createOption("en", challengeId, "please", false, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these means 'blue'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "yellow", false, 1),
	createOption("es", challengeId, "red", false, 2),
	createOption("es", challengeId, "blue", true, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'adiós'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "goodbye", true, 1, false),
	createOption("en", challengeId, "thank you", false, 2, false),
	createOption("en", challengeId, "hello", false, 3, false),
]

const spanishLesson4ChallengeOptions = [
	...getChallenge1Options(46),
	...getChallenge2Options(47),
	...getChallenge3Options(48),
	...getChallenge4Options(49),
]

export { spanishLesson4ChallengeOptions }
