import { ITEM_DEFINITIONS } from "@seeds/constants/item-definitions"
import { LOCALES } from "@seeds/constants/locales"
import type {
	Challenge,
	ChallengeOption,
	Course,
	LanguageCode,
	LanguageMap,
	Lesson,
	Unit,
	VocabKey,
} from "@seeds/types"
import { getAudioPath, getItemImagePath } from "@seeds/utils/get-assets-paths"

export const createOption = (
	language: LanguageCode,
	challengeId: number,
	key: VocabKey,
	isCorrect: boolean,
	placement: number,
	includeMedia: boolean = true, // Default to true, set false for "assist" challenges
): ChallengeOption => {
	// Get the shared metadata (Category, AssetKey)
	const def = ITEM_DEFINITIONS[key]

	// Get the specific text for this language
	const text = LOCALES[language][key]

	return {
		challengeId,
		isCorrect,
		textContent: text,
		placement,
		// Conditionally add media paths
		imageSrc: includeMedia
			? getItemImagePath(def.category, def.assetKey)
			: null,
		audioSrc: includeMedia ? getAudioPath(language, def.assetKey) : null,
	}
}

export const createChallenge = (
	lessonId: number,
	type: "assist" | "select",
	placement: number,
	question: string,
): Challenge => {
	return {
		lessonId,
		type,
		placement,
		question,
	}
}

export const createLesson = (
	unitId: number,
	title: string,
	placement: number,
): Lesson => {
	return {
		unitId,
		title,
		placement,
	}
}

export const createUnit = (
	courseId: number,
	title: string,
	description: string,
	placement: number,
): Unit => {
	return {
		courseId,
		title,
		description,
		placement,
	}
}

export const createCourse = <C extends LanguageCode>(
	code: C,
	title: LanguageMap[C],
	placement: number,
): Course => {
	return {
		code,
		title,
		placement,
	}
}
