import { ITEM_DEFINITIONS } from "@seeds/constants/item-definitions"
import { LOCALES } from "@seeds/constants/locales"
import type { AssetMap, Category, LanguageCode, VocabKey } from "@seeds/types"

export type VocabularyItem = {
	[K in Category]: {
		text: string
		category: K
		assetKey: AssetMap[K]
	}
}[Category]

export function getVocabulary(
	lang: LanguageCode,
): Record<VocabKey, VocabularyItem> {
	const translations = LOCALES[lang]

	// We map over the keys of ITEM_DEFINITIONS to build the final object
	// We use a cast here because Object.entries/keys is loosely typed in TS
	const result = {} as Record<VocabKey, VocabularyItem>

	for (const key in ITEM_DEFINITIONS) {
		const k = key as VocabKey

		// Merge the translation with the metadata
		result[k] = {
			...ITEM_DEFINITIONS[k],
			text: translations[k],
		}
	}

	return result
}
