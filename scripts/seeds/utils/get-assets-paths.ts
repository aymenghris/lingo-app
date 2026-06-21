import type { AssetMap, Category, LanguageCode } from "@seeds/types"

export const getAudioPath = <T extends Category>(
	languageCode: LanguageCode,
	category: T,
	item: AssetMap[T],
) => `/audios/${languageCode}/${category}/${item}.mp3`

export const getItemImagePath = <T extends Category>(
	category: T,
	item: AssetMap[T],
) => `/assets/${category}/${item.replace(" ", "-")}.png`
