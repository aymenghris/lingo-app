import { createUnit } from "@seeds/utils/create-content"

const COURSE_ID = 1

export const spanishUnits = [
	createUnit(COURSE_ID, "Unit 1", "Unit 1 description", 1),
	createUnit(COURSE_ID, "Unit 2", "Unit 2 description", 2),
	createUnit(COURSE_ID, "Unit 3", "Unit 3 description", 3),
]
