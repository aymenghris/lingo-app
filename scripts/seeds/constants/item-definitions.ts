import type { AssetMap, Category, Character, Objects } from "@seeds/types"

type Words = Character | Objects

type BaseItemDefinition = {
	[K in Category]: {
		category: K
		assetKey: AssetMap[K]
	}
}[Category]

// This holds the data that is the same for English, Spanish, etc.
export const ITEM_DEFINITIONS = {
	man: {
		assetKey: "man",
		category: "character",
	},
	woman: {
		assetKey: "woman",
		category: "character",
	},
	robot: {
		assetKey: "robot",
		category: "character",
	},
} as const satisfies Partial<Record<Words, BaseItemDefinition>>
