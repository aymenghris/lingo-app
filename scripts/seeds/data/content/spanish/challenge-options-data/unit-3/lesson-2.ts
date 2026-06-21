import { createOption } from "@seeds/utils/create-content"

// Lesson 2: Review — Characters & Animals

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'the zombie'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "robot", false, 1),
	createOption("es", challengeId, "zombie", true, 2),
	createOption("es", challengeId, "dog", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'el robot'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "robot", true, 1, false), // false = no media
	createOption("en", challengeId, "zombie", false, 2, false),
	createOption("en", challengeId, "cat", false, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'the cat'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "dog", false, 1),
	createOption("es", challengeId, "cat", true, 2),
	createOption("es", challengeId, "bird", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'el perro'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "bird", false, 1, false), // false = no media
	createOption("en", challengeId, "dog", true, 2, false),
	createOption("en", challengeId, "boy", false, 3, false),
]

const spanishLesson2ChallengeOptions = [
	...getChallenge1Options(38),
	...getChallenge2Options(39),
	...getChallenge3Options(40),
	...getChallenge4Options(41),
]

export { spanishLesson2ChallengeOptions }
