import { createOption } from "@seeds/utils/create-content"

// Lesson 3: Animals

/**
 * Challenge 1: Select
 * Question: "Which one of these is 'the dog'?"
 */
const getChallenge1Options = (challengeId: number) => [
	createOption("es", challengeId, "cat", false, 1),
	createOption("es", challengeId, "dog", true, 2),
	createOption("es", challengeId, "bird", false, 3),
]

/**
 * Challenge 2: Assist
 * Question: "Select the correct meaning: 'el gato'"
 */
const getChallenge2Options = (challengeId: number) => [
	createOption("en", challengeId, "bird", false, 1, false),
	createOption("en", challengeId, "dog", false, 2, false),
	createOption("en", challengeId, "cat", true, 3, false),
]

/**
 * Challenge 3: Select
 * Question: "Which one of these is 'the bird'?"
 */
const getChallenge3Options = (challengeId: number) => [
	createOption("es", challengeId, "bird", true, 1),
	createOption("es", challengeId, "dog", false, 2),
	createOption("es", challengeId, "cat", false, 3),
]

const spanishLesson3ChallengeOptions = [
	...getChallenge1Options(9),
	...getChallenge2Options(10),
	...getChallenge3Options(11),
]

export { spanishLesson3ChallengeOptions }
