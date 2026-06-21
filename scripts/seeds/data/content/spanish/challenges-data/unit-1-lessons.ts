import { createChallenge } from "@seeds/utils/create-content"

// Unit 1
// Lesson 1: Common Nouns
const getLesson1Challenges = (lessonId: number) => [
	createChallenge(lessonId, "select", 1, "which one of these is 'the man'?"),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'la mujer'",
	),
	createChallenge(lessonId, "select", 3, "which one of these is 'the boy'?"),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'el hombre'",
	),
]

// Lesson 2: Food & Drink
const getLesson2Challenges = (lessonId: number) => [
	createChallenge(
		lessonId,
		"select",
		1,
		"which one of these is 'the apple'?",
	),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'el pan'",
	),

	createChallenge(lessonId, "select", 3, "which one of these is 'the milk'?"),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'el agua'",
	),
]

// Lesson 3: Animals
const getLesson3Challenges = (lessonId: number) => [
	createChallenge(lessonId, "select", 1, "which one of these is 'the dog'?"),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'el gato'",
	),

	createChallenge(lessonId, "select", 3, "which one of these is 'the bird'?"),
]

// Lesson 4: Colors
const getLesson4Challenges = (lessonId: number) => [
	createChallenge(lessonId, "select", 1, "which one of these is 'red'?"),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'azul'",
	),

	createChallenge(lessonId, "select", 3, "which one of these is 'green'?"),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'amarillo'",
	),
]

const spanishUnit1LessonsChallenges = [
	...getLesson1Challenges(1),
	...getLesson2Challenges(2),
	...getLesson3Challenges(3),
	...getLesson4Challenges(4),
]

export { spanishUnit1LessonsChallenges }
