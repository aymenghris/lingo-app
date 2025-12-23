import { coursesAssets } from "@/constants"
import type { Course } from "@/scripts/seeds/utils/types"

const { spanish, french, arabic, italian, japanese } = coursesAssets

export const coursesData: Course[] = [
	{
		id: 1,
		title: spanish.title,
		imageSrc: spanish.flagSrc,
	},
	{
		id: 2,
		title: french.title,
		imageSrc: french.flagSrc,
	},
	{
		id: 3,
		title: arabic.title,
		imageSrc: arabic.flagSrc,
	},
	{
		id: 4,
		title: italian.title,
		imageSrc: italian.flagSrc,
	},
	{
		id: 5,
		title: japanese.title,
		imageSrc: japanese.flagSrc,
	},
]
