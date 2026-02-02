import type { VocabKey } from "@seeds/types"

const dz: Record<VocabKey, string> = {
	man: "الرجل",
	woman: "الإمرأة",
	robot: "الروبوت",
}

const es: Record<VocabKey, string> = {
	man: "el hombre",
	woman: "la mujer",
	robot: "el robot",
}

const fr: Record<VocabKey, string> = {
	man: "le homme",
	woman: "la femme",
	robot: "le robot",
}

const it: Record<VocabKey, string> = {
	man: "il uomo",
	woman: "la donna",
	robot: "il robot",
}

const en: Record<VocabKey, string> = {
	man: "the man",
	woman: "the woman",
	robot: "the robot",
}

const jp: Record<VocabKey, string> = {
	man: "男",
	woman: "女",
	robot: "ロボット",
}

export const LOCALES = { dz, es, fr, it, en, jp }
