import type { Unit } from "@/scripts/seeds/utils/types"

const coursesIds = {
	1: 6,
}

export const spanishUnits: Unit[] = [
	{
		id: 7,
		title: "Unit 1",
		description: "Unit 1 description",
		courseId: coursesIds[1],
		placement: 1,
	},
	{
		id: 11,
		title: "Unit 2",
		description: "Unit 2 description",
		courseId: coursesIds[1],
		placement: 2,
	},
	{
		id: 5,
		title: "Unit 3",
		description: "Unit 3 description",
		courseId: coursesIds[1],
		placement: 3,
	},
]
