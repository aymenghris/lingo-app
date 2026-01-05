import type { Challenge } from "@/scripts/seeds/utils/types"

const lessonsIds = {
	1: 4,
	2: 3,
	3: 10,
}

export const spanishChallengesLesson1: Challenge[] = [
	{
		id: 9,
		lessonId: lessonsIds[1],
		type: "select",
		placement: 1,
		question: "Question placeholder for challenge 1.",
	},
	{
		id: 5,
		lessonId: lessonsIds[1],
		type: "select",
		placement: 2,
		question: "Question placeholder for challenge 2.",
	},
	{
		id: 7,
		lessonId: lessonsIds[1],
		type: "select",
		placement: 3,
		question: "Question placeholder for challenge 3.",
	},
]

export const spanishChallengesLesson2: Challenge[] = [
	{
		id: 12,
		lessonId: lessonsIds[2],
		type: "select",
		placement: 1,
		question: "Question placeholder for challenge 1.",
	},
	{
		id: 19,
		lessonId: lessonsIds[2],
		type: "select",
		placement: 2,
		question: "Question placeholder for challenge 2.",
	},
	{
		id: 11,
		lessonId: lessonsIds[2],
		type: "select",
		placement: 3,
		question: "Question placeholder for challenge 3.",
	},
]

export const spanishChallengesLesson3: Challenge[] = [
	{
		id: 25,
		lessonId: lessonsIds[3],
		type: "select",
		placement: 1,
		question: "Question placeholder for challenge 1.",
	},
	{
		id: 22,
		lessonId: lessonsIds[3],
		type: "select",
		placement: 2,
		question: "Question placeholder for challenge 2.",
	},
	{
		id: 27,
		lessonId: lessonsIds[3],
		type: "select",
		placement: 3,
		question: "Question placeholder for challenge 3.",
	},
]
