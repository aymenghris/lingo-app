import type { enrollments } from "@database/schemas"

export type ActiveCourseId = (typeof enrollments.$inferSelect)["courseId"]
