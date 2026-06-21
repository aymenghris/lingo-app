import { createUnit } from "@seeds/utils/create-content"

const COURSE_ID = 1

export const spanishUnits = [
	createUnit(COURSE_ID, "unit 1", "basics — foundational words", 1),
	createUnit(COURSE_ID, "unit 2", "common phrases & fun words", 2),
	createUnit(COURSE_ID, "unit 3", "actions & review", 3),
]
