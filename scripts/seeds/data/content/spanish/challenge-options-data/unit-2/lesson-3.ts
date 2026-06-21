import { createOption } from "@seeds/utils/create-content"

// Lesson 3: Around the House

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'the house'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "table", false, 1),
	createOption("es", challengeId, "house", true, 2),
	createOption("es", challengeId, "chair", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'la mesa'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "chair", false, 1, false), // false = no media
	createOption("en", challengeId, "table", true, 2, false),
	createOption("en", challengeId, "house", false, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'the chair'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "chair", true, 1),
	createOption("es", challengeId, "house", false, 2),
	createOption("es", challengeId, "door", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'la puerta'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "door", true, 1, false), // false = no media
	createOption("en", challengeId, "table", false, 2, false),
	createOption("en", challengeId, "chair", false, 3, false),
]

const spanishLesson3ChallengeOptions = [
	...getChallenge1Options(24),
	...getChallenge2Options(25),
	...getChallenge3Options(26),
	...getChallenge4Options(27),
]

export { spanishLesson3ChallengeOptions }
