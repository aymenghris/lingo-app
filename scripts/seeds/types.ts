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

export type Animal = "bird" | "cat" | "dog"
export type Character = "boy" | "girl" | "man" | "robot" | "woman" | "zombie"
export type Clothing = "hat" | "shirt" | "shoes"
export type Color = "blue" | "green" | "red" | "yellow"
export type Food = "bread" | "milk" | "water"
export type Fruit = "apple" | "banana" | "cherry"
export type Furniture = "door" | "house" | "table" | "chair"
export type Greeting = "hello" | "goodbye" | "please" | "thank you"
export type Numbers = "one" | "two" | "three" | "four" | "five"
export type Verbs = "eat" | "run" | "sleep" | "drink"

export interface AssetMap {
	animals: Animal
	characters: Character
	clothing: Clothing
	colors: Color
	fruits: Fruit
	food: Food
	greetings: Greeting
	furniture: Furniture
	numbers: Numbers
	verbs: Verbs
}

export type Category = keyof AssetMap

export type VocabKey = keyof typeof ITEM_DEFINITIONS
