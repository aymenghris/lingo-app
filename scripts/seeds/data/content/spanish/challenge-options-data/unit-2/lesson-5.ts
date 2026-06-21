import { createOption } from "@seeds/utils/create-content"

// Lesson 5: Clothing

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'the shirt'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "shoes", false, 1),
	createOption("es", challengeId, "shirt", true, 2),
	createOption("es", challengeId, "hat", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'los zapatos'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "hat", false, 1, false), // false = no media
	createOption("en", challengeId, "shirt", false, 2, false),
	createOption("en", challengeId, "shoes", true, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'the hat'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "hat", true, 1),
	createOption("es", challengeId, "shirt", false, 2),
	createOption("es", challengeId, "shoes", false, 3),
]

const spanishLesson5ChallengeOptions = [
	...getChallenge1Options(31),
	...getChallenge2Options(32),
	...getChallenge3Options(33),
]

export { spanishLesson5ChallengeOptions }
