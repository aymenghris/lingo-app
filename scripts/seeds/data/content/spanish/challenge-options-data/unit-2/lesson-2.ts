import { createOption } from "@seeds/utils/create-content"

// Lesson 2: Fun & Fantasy Words

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'the zombie'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "robot", false, 1),
	createOption("es", challengeId, "zombie", true, 2),
	createOption("es", challengeId, "man", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'el robot'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "zombie", false, 1, false), // false = no media
	createOption("en", challengeId, "man", false, 2, false),
	createOption("en", challengeId, "robot", true, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'the robot'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "zombie", false, 1),
	createOption("es", challengeId, "robot", true, 2),
	createOption("es", challengeId, "woman", false, 3),
]

/**
 * Challenge 4: Assist
 * Question: "Select the correct meaning: 'el zombi'"
 */
const getChallenge4Options = (challengeId: number) => [
	createOption("en", challengeId, "robot", false, 1, false), // false = no media
	createOption("en", challengeId, "boy", false, 2, false),
	createOption("en", challengeId, "zombie", true, 3, false),
]

const spanishLesson2ChallengeOptions = [
	...getChallenge1Options(20),
	...getChallenge2Options(21),
	...getChallenge3Options(22),
	...getChallenge4Options(23),
]

export { spanishLesson2ChallengeOptions }
