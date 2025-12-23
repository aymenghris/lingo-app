import type { courses } from "@/database/schema"

export type Course = typeof courses.$inferInsert
