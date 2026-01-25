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
	const lesson = await getLessonWithProgress(currentLessonId)
	const { hearts } = await getUserStats()

	// If it's a practice
	const initialLessonPercentage = lesson.completed
		? 0
		: lessonProgressPercentage(lesson.challenges)

	return (
		<QuizOrchestrator
			initialLessonId={currentLessonId}
			initialChallenges={lesson.challenges}
			initialHearts={hearts}
			initialPercentage={initialLessonPercentage}
			initialQuizMode={lesson.completed ? "practice" : "learn"}
		/>
	)
}

export default LessonPage
