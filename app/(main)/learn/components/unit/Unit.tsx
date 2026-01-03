import { getLessons } from "@database/queries"
import { Lesson } from "@learn/components/lesson/Lesson"
import { UnitBanner } from "@learn/components/unit/UnitBanner"
import type { FC } from "react"
import { UnitProvider } from "@/provider/UnitProvider"

interface UnitProps {
	unitId: number
	unitTitle: string
	unitDescription: string
	unitPlacement: number
}

export const Unit: FC<UnitProps> = async ({
	unitId,
	unitTitle,
	unitDescription,
	unitPlacement,
}) => {
	const lessonsData = await getLessons(unitId)
	const totalLesson = lessonsData.length

	return (
		<UnitProvider unitPlacement={unitPlacement} totalLessons={totalLesson}>
			<UnitBanner title={unitTitle} description={unitDescription} />

			<div className="flex flex-col items-center">
				{lessonsData.map((lesson) => {
					return (
						<Lesson
							key={lesson.id}
							lessonId={lesson.id}
							lessonPlacement={lesson.placement}
						/>
					)
				})}
			</div>
		</UnitProvider>
	)
}
