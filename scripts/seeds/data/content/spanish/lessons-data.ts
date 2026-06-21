import { createLesson } from "@seeds/utils/create-content"

const getUnit1Lessons = (unitId: number) => [
	createLesson(unitId, "common nouns", 1),
	createLesson(unitId, "food & drink", 2),
	createLesson(unitId, "animals", 3),
	createLesson(unitId, "colors", 4),
]

const getUnit2Lessons = (unitId: number) => [
	createLesson(unitId, "greetings", 1),
	createLesson(unitId, "fun & fantasy words", 2),
	createLesson(unitId, "around the house", 3),
	createLesson(unitId, "numbers", 4),
	createLesson(unitId, "clothing", 5),
]

const getUnit3Lessons = (unitId: number) => [
	createLesson(unitId, "basic verbs", 1),
	createLesson(unitId, "review — characters & animals", 2),
	createLesson(unitId, "review — food & drink", 3),
	createLesson(unitId, "review — colors & greetings", 4),
]

export const spanishLessons = [
	...getUnit1Lessons(1),
	...getUnit2Lessons(2),
	...getUnit3Lessons(3),
]
