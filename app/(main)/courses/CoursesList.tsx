"use client"

import type { courses, userProgress } from "@database/schemas"
import { useRouter } from "next/navigation"
import { type FC, useTransition } from "react"
import { toast } from "sonner"
import { upsertUserProgress } from "@/actions/user-progress"
import { CourseCard } from "@/app/(main)/courses/CourseCard"
import { cn } from "@/lib/utils"

interface CoursesListProps {
	courses: (typeof courses.$inferSelect)[]
	activeCourseId?: (typeof userProgress.$inferSelect)["activeCourseId"]
}
export const CoursesList: FC<CoursesListProps> = ({
	courses,
	activeCourseId,
}) => {
	const router = useRouter()
	const [pending, startTransition] = useTransition()

	const handleCourseClick = (courseId: number) => {
		if (pending) return

		if (courseId === activeCourseId) {
			return router.push("/learn")
		}

		startTransition(() => {
			upsertUserProgress(courseId)
				.then(() => {
					router.push("/learn")
				})
				.catch(() => {
					toast.error("Something went wrong")
				})
		})
	}

	return (
		<div
			className={cn(
				"grid grid-cols-2 gap-4",
				"pt-6",
				"lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]",
			)}
		>
			{courses.map((course) => (
				<CourseCard
					key={course.title}
					title={course.title}
					id={course.id}
					imageSrc={course.imageSrc}
					onClick={handleCourseClick}
					disabled={pending}
					active={course.id === activeCourseId}
				/>
			))}
		</div>
	)
}
