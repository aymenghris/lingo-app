import { createOption } from "@seeds/utils/create-content"

// Lesson 1: Basic Verbs

/**
 * Challenge 1: Select
 * Question: "Which one of these means 'to eat'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "drink", false, 1),
	createOption("es", challengeId, "eat", true, 2),
	createOption("es", challengeId, "run", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'beber'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "drink", true, 1, false), // false = no media
	createOption("en", challengeId, "sleep", false, 2, false),
	createOption("en", challengeId, "run", false, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these means 'to run'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "sleep", false, 1),
	createOption("es", challengeId, "run", true, 2),
	createOption("es", challengeId, "eat", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'dormir'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "sleep", true, 1, false), // false = no media
	createOption("en", challengeId, "eat", false, 2, false),
	createOption("en", challengeId, "drink", false, 3, false),
]

const spanishLesson1ChallengeOptions = [
	...getChallenge1Options(34),
	...getChallenge2Options(35),
	...getChallenge3Options(36),
	...getChallenge4Options(37),
]

export { spanishLesson1ChallengeOptions }
