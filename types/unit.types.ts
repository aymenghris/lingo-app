import type { units } from "@database/schemas"

export type Unit = typeof units.$inferSelect

export interface UnitInfo {
	placement: number
	totalLessons: number
}
