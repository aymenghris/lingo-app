import type { courses } from "@database/schemas"

export type Course = typeof courses.$inferSelect
