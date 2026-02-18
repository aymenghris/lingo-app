import { getUserStats, isUserCompletedLesson } from "@database/queries"
import { QuizOrchestrator } from "@lesson/components/quiz/QuizOrchestrator"
import { notFound } from "next/navigation"
import { getLessonWithProgress } from "@/services/lesson-service"
import { getUserSubscriptionData } from "@/utils/get-user-data"

interface Params {
	params: Promise<{ lessonId: number }>
}

const LessonIdPage = async ({ params }: Params) => {
	const { lessonId } = await params

	// const isLessonCompleted = await isUserCompletedLesson(lessonId)
	const [isLessonCompleted, { isSubscribed }] = await Promise.all([
		isUserCompletedLesson(lessonId),
		getUserSubscriptionData(),
	])

	if (!isLessonCompleted) notFound()

	const lesson = await getLessonWithProgress(lessonId, true)
	const { hearts } = await getUserStats()

	return (
		<QuizOrchestrator
			initialLessonId={lessonId}
			initialChallenges={lesson.challenges}
			initialHearts={hearts}
			initialPercentage={0}
			initialQuizMode="practice"
			isSubscribed={isSubscribed}
		/>
	)
}

export default LessonIdPage
