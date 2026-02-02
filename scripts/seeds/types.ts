import type { ITEM_DEFINITIONS } from "@seeds/constants/item-definitions"

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
	character: Character
	objects: Objects
}

export type Category = keyof AssetMap

export type VocabKey = keyof typeof ITEM_DEFINITIONS
