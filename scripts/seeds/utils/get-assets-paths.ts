import type { AssetMap, Category, Character, LanguageCode } from "@seeds/types"

export const getAudioPath = (languageCode: LanguageCode, item: Character) =>
	`/audios/${languageCode}/${item}.mp3`

export const getItemImagePath = <T extends Category>(
	category: T,
	item: AssetMap[T],
) => `/${category}/${item}.png`
