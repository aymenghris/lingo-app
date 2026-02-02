import type {
	challengeOptions,
	challenges,
	courses,
	lessons,
	units,
} from "@database/schemas"
import type { ITEM_DEFINITIONS } from "@seeds/constants/item-definitions"

export type Course = typeof courses.$inferInsert
export type Unit = typeof units.$inferInsert
export type Lesson = typeof lessons.$inferInsert
export type Challenge = typeof challenges.$inferInsert
export type ChallengeOption = typeof challengeOptions.$inferInsert

export type LanguageMap = {
	dz: "arabic"
	es: "spanish"
	fr: "french"
	it: "italian"
	jp: "japanese"
	en: "english"
}

export type LanguageCode = keyof LanguageMap

export type Character = "man" | "woman" | "robot"

export type Objects = "apple" | "banana" | "cherry"

export interface AssetMap {
	characters: Character
	objects: Objects
}

export type Category = keyof AssetMap

export type VocabKey = keyof typeof ITEM_DEFINITIONS
