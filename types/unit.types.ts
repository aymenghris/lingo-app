import type { units } from "@database/schemas"

export interface UnitInfo {
	placement: number
	totalLessons: number
}

export type UnitInsert = typeof units.$inferInsert
