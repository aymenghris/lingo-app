"use client"

import type { FC } from "react"
import { CourseCard } from "@/app/(main)/courses/CourseCard"
import type { courses, userProgress } from "@/database/schema"
import { cn } from "@/lib/utils"

interface CoursesListProps {
	courses: (typeof courses.$inferSelect)[]
	activeCourseId?: (typeof userProgress.$inferSelect)["activeCourseId"]
}
export const CoursesList: FC<CoursesListProps> = ({
	courses,
	activeCourseId,
}) => (
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
				onClick={() => {}}
				disabled={false}
				active={course.id === activeCourseId}
			/>
		))}
	</div>
)
