import { createOption } from "@seeds/utils/create-content"

// Lesson 4: Numbers

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'one'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "three", false, 1),
	createOption("es", challengeId, "one", true, 2),
	createOption("es", challengeId, "two", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'tres'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "two", false, 1, false), // false = no media
	createOption("en", challengeId, "one", false, 2, false),
	createOption("en", challengeId, "three", true, 3, false),
]

/**
 * Challenge 3: Assist
 * Question: "Select the correct meaning: 'cinco'"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("en", challengeId, "four", false, 1, false), // false = no media
	createOption("en", challengeId, "five", true, 2, false),
	createOption("en", challengeId, "three", false, 3, false),
]

const spanishLesson4ChallengeOptions = [
	...getChallenge1Options(28),
	...getChallenge2Options(29),
	...getChallenge3Options(30),
]

export { spanishLesson4ChallengeOptions }
