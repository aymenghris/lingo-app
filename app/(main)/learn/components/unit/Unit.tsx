import { Lesson } from "@learn/components/lesson/Lesson"
import { UnitBanner } from "@learn/components/unit/UnitBanner"
import type { FC } from "react"
import type { LessonsWithChallenges } from "@/types/lessons.types"

interface UnitProps {
	id: number
	title: string
	description: string
	placement: number
	totalLessons: number
	lessons: LessonsWithChallenges[]
}

export const Unit: FC<UnitProps> = async ({
	title,
	description,
	placement,
	totalLessons,
	lessons,
}) => {
	const unitInfo = { placement, totalLessons }
	return (
		<>
			<UnitBanner title={title} description={description} />

			<div className="flex flex-col items-center">
				{lessons.map((lesson) => {
					return (
						<Lesson
							key={lesson.id}
							id={lesson.id}
							placement={lesson.placement}
							state={lesson.state}
							challenges={lesson.challenges}
							unit={unitInfo}
						/>
					)
				})}
			</div>
		</>
	)
}
