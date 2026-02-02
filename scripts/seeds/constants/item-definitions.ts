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
		category: "characters",
	},
	woman: {
		assetKey: "woman",
		category: "characters",
	},
	robot: {
		assetKey: "robot",
		category: "characters",
	},
} as const satisfies Partial<Record<Words, BaseItemDefinition>>
