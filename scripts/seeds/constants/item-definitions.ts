import type {
	Animal,
	AssetMap,
	Category,
	Character,
	Clothing,
	Color,
	Food,
	Fruit,
	Furniture,
	Greeting,
	Numbers,
	Verbs,
} from "@seeds/types"

export type Words =
	| Animal
	| Character
	| Color
	| Clothing
	| Food
	| Fruit
	| Furniture
	| Greeting
	| Numbers
	| Verbs

type BaseItemDefinition = {
	[K in Category]: {
		category: K
		assetKey: AssetMap[K]
	}
}[Category]

// This holds the data that is the same for English, Spanish, etc.
export const ITEM_DEFINITIONS = {
	apple: {
		assetKey: "apple",
		category: "fruits",
	},
	banana: {
		assetKey: "banana",
		category: "fruits",
	},
	bird: {
		assetKey: "bird",
		category: "animals",
	},
	blue: {
		assetKey: "blue",
		category: "colors",
	},
	boy: {
		assetKey: "boy",
		category: "characters",
	},
	bread: {
		assetKey: "bread",
		category: "food",
	},
	cat: {
		assetKey: "cat",
		category: "animals",
	},
	chair: {
		assetKey: "chair",
		category: "furniture",
	},
	cherry: {
		assetKey: "cherry",
		category: "fruits",
	},
	dog: {
		assetKey: "dog",
		category: "animals",
	},
	door: {
		assetKey: "door",
		category: "furniture",
	},
	drink: {
		assetKey: "drink",
		category: "verbs",
	},
	eat: {
		assetKey: "eat",
		category: "verbs",
	},
	five: {
		assetKey: "five",
		category: "numbers",
	},
	four: {
		assetKey: "four",
		category: "numbers",
	},
	girl: {
		assetKey: "girl",
		category: "characters",
	},
	goodbye: {
		assetKey: "goodbye",
		category: "greetings",
	},
	green: {
		assetKey: "green",
		category: "colors",
	},
	hat: {
		assetKey: "hat",
		category: "clothing",
	},
	hello: {
		assetKey: "hello",
		category: "greetings",
	},
	house: {
		assetKey: "house",
		category: "furniture",
	},
	man: {
		assetKey: "man",
		category: "characters",
	},
	milk: {
		assetKey: "milk",
		category: "food",
	},
	one: {
		assetKey: "one",
		category: "numbers",
	},
	please: {
		assetKey: "please",
		category: "greetings",
	},
	red: {
		assetKey: "red",
		category: "colors",
	},
	robot: {
		assetKey: "robot",
		category: "characters",
	},
	run: {
		assetKey: "run",
		category: "verbs",
	},
	shirt: {
		assetKey: "shirt",
		category: "clothing",
	},
	shoes: {
		assetKey: "shoes",
		category: "clothing",
	},
	sleep: {
		assetKey: "sleep",
		category: "verbs",
	},
	table: {
		assetKey: "table",
		category: "furniture",
	},
	"thank you": {
		assetKey: "thank you",
		category: "greetings",
	},
	three: {
		assetKey: "three",
		category: "numbers",
	},
	two: {
		assetKey: "two",
		category: "numbers",
	},
	water: {
		assetKey: "water",
		category: "food",
	},
	woman: {
		assetKey: "woman",
		category: "characters",
	},
	yellow: {
		assetKey: "yellow",
		category: "colors",
	},
	zombie: {
		assetKey: "zombie",
		category: "characters",
	},
} as const satisfies Record<Words, BaseItemDefinition>
