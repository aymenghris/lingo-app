import { createChallenge } from "@seeds/utils/create-content"

// Unit 3
// Lesson 1: Basic Verbs
const getLesson1Challenges = (lessonId: number) => [
	createChallenge(
		lessonId,
		"select",
		1,
		"which one of these means 'to eat'?",
	),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'beber'",
	),

	createChallenge(
		lessonId,
		"select",
		3,
		"which one of these means 'to run'?",
	),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'dormir'",
	),
]

// Lesson 2: Review — Characters & Animals
const getLesson2Challenges = (lessonId: number) => [
	createChallenge(
		lessonId,
		"select",
		1,
		"which one of these is 'the zombie'?",
	),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'el robot'",
	),

	createChallenge(lessonId, "select", 3, "which one of these is 'the cat'?"),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'el perro'",
	),
]

// Lesson 3: Review — Food & Drink
const getLesson3Challenges = (lessonId: number) => [
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
		"select the correct meaning: 'el agua'",
	),

	createChallenge(
		lessonId,
		"select",
		3,
		"which one of these is 'the bread'?",
	),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'la leche'",
	),
]

// Lesson 4: Review — Colors & Greetings
const getLesson4Challenges = (lessonId: number) => [
	createChallenge(lessonId, "select", 1, "which one of these means 'red'?"),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'hola'",
	),

	createChallenge(lessonId, "select", 3, "which one of these means 'blue'?"),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'adiós'",
	),
]

const spanishUnit3LessonsChallenges = [
	...getLesson1Challenges(10),
	...getLesson2Challenges(11),
	...getLesson3Challenges(12),
	...getLesson4Challenges(13),
]

export { spanishUnit3LessonsChallenges }
