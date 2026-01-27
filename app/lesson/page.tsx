import { getUserActiveEnrollment, getUserStats } from "@database/queries"
import { QuizOrchestrator } from "@lesson/components/quiz/QuizOrchestrator"
import { redirect } from "next/navigation"
import { getLessonWithProgress } from "@/services/lesson-service"
import { lessonProgressPercentage } from "@/utils/lesson-progress-percentage"

const LessonPage = async () => {
	const userActiveEnrolment = await getUserActiveEnrollment()

	if (!userActiveEnrolment) {
		redirect("/courses")
	}
	const { currentLessonId } = userActiveEnrolment
	const lesson = await getLessonWithProgress(currentLessonId, false)
	const { hearts } = await getUserStats()

	const initialLessonPercentage = lessonProgressPercentage(lesson.challenges)

	return (
		<QuizOrchestrator
			initialLessonId={currentLessonId}
			initialChallenges={lesson.challenges}
			initialHearts={hearts}
			initialPercentage={initialLessonPercentage}
			initialQuizMode="learn"
		/>
	)
}

export default LessonPage
