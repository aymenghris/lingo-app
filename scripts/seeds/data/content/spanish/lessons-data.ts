import { createLesson } from "@seeds/utils/create-content"

const getUnit1Lessons = (unitId: number) => [
	createLesson(unitId, "Lesson 1: title", 1),
	createLesson(unitId, "Lesson 2: title", 2),
	createLesson(unitId, "Lesson 3: title", 3),
	createLesson(unitId, "Lesson 4: title", 4),
	createLesson(unitId, "Lesson 5: title", 5),
]

export const spanishLessons = [
	...getUnit1Lessons(1),
	...getUnit1Lessons(2),
	...getUnit1Lessons(3),
]
