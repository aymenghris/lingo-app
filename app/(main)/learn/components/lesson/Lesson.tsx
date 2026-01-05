import { LessonButton } from "@learn/components/lesson/LessonButton"
import {
	calculateLessonProgressPercentage,
	determineLessonState,
} from "@learn/utils/lesson-utils"
import type { FC } from "react"

interface LessonsButtonProps {
	lessonId: number
	lessonPlacement: number
}

export const Lesson: FC<LessonsButtonProps> = async ({
	lessonId,
	lessonPlacement,
}) => {
	const lessonState = await determineLessonState(lessonId)
	const lessonProgressPercentage =
		await calculateLessonProgressPercentage(lessonId)

	return (
		<LessonButton
			lessonState={lessonState}
			lessonPlacement={lessonPlacement}
			lessonProgressPercentage={lessonProgressPercentage}
		/>
	)
}
