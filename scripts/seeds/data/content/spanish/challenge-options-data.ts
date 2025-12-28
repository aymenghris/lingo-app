import type { ChallengeOptions } from "@/scripts/seeds/utils/types"

export const SpanishChallengeOptions: ChallengeOptions[] = [
	{
		id: 1,
		challengeId: 1,
		imageSrc: "/man.svg",
		isCorrect: true,
		textContent: "el hombre",
		audioSrc: "/es_man.mp3",
	},
	{
		id: 2,
		challengeId: 1,
		imageSrc: "/woman.svg",
		isCorrect: false,
		textContent: "la mujer",
		audioSrc: "/es_woman.mp3",
	},
	{
		id: 3,
		challengeId: 1,
		imageSrc: "/robot.svg",
		isCorrect: false,
		textContent: "el robot",
		audioSrc: "/es_robot.mp3",
	},
]
