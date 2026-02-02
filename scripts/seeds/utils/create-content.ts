import { ITEM_DEFINITIONS } from "@seeds/constants/item-definitions"
import { LOCALES } from "@seeds/constants/locales"
import type { LanguageCode, LanguageMap, VocabKey } from "@seeds/types"
import { getAudioPath, getItemImagePath } from "@seeds/utils/get-assets-paths"
import type { ChallengeOption } from "@/types/challenge-options.types"
import type { Challenge } from "@/types/challenges.types"
import type { Course } from "@/types/course.types"
import type { Lesson } from "@/types/lessons.types"
import type { Unit } from "@/types/unit.types"

export const createOption = (
	language: LanguageCode,
	challengeId: number,
	key: VocabKey,
	isCorrect: boolean,
	placement: number,
	includeMedia: boolean = true, // Default to true, set false for "assist" challenges
): Omit<ChallengeOption, "id"> => {
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
): Omit<Challenge, "id"> => {
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
): Omit<Lesson, "id"> => {
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
): Omit<Unit, "id"> => {
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
): Omit<Course, "id"> => {
	return {
		code,
		title,
		placement,
	}
}
