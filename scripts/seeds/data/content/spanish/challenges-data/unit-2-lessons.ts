import { createChallenge } from "@seeds/utils/create-content"

// Unit 2
// Lesson 1: Greetings
const getLesson1Challenges = (lessonId: number) => [
	createChallenge(lessonId, "select", 1, "which one of these is 'hello'?"),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'adiós'",
	),
	createChallenge(
		lessonId,
		"select",
		3,
		"which one of these means 'thank you'?",
	),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'por favor'",
	),
]

// Lesson 2: Fun & Fantasy Words
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

	createChallenge(
		lessonId,
		"select",
		3,
		"which one of these is 'the robot'?",
	),

	createChallenge(
		lessonId,
		"assist",
		4,
		"select the correct meaning: 'el zombi'",
	),
]

// Lesson 3: Around the House
const getLesson3Challenges = (lessonId: number) => [
	createChallenge(
		lessonId,
		"select",
		1,
		"which one of these is 'the house'?",
	),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'la mesa'",
	),

	createChallenge(
		lessonId,
		"select",
		3,
		"which one of these is 'the chair'?",
	),

	createChallenge(
		lessonId,
		"assist",
		4,
		"Select the correct meaning: 'la puerta'",
	),
]

// Lesson 4: Numbers
const getLesson4Challenges = (lessonId: number) => [
	createChallenge(lessonId, "select", 1, "which one of these is 'one'?"),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'tres'",
	),

	createChallenge(
		lessonId,
		"assist",
		3,
		"select the correct meaning: 'cinco'",
	),
]

// Lesson 5: Clothing
const getLesson5Challenges = (lessonId: number) => [
	createChallenge(
		lessonId,
		"select",
		1,
		"which one of these is 'the shirt'?",
	),

	createChallenge(
		lessonId,
		"assist",
		2,
		"select the correct meaning: 'los zapatos'",
	),

	createChallenge(lessonId, "select", 3, "which one of these is 'the hat'?"),
]

const spanishUnit2LessonsChallenges = [
	...getLesson1Challenges(5),
	...getLesson2Challenges(6),
	...getLesson3Challenges(7),
	...getLesson4Challenges(8),
	...getLesson5Challenges(9),
]

export { spanishUnit2LessonsChallenges }
