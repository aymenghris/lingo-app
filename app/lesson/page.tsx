import { getUserActiveEnrollment, getUsersStats } from "@database/queries"
import { redirect } from "next/navigation"
import { Quiz } from "@/app/lesson/components/quiz/Quiz"
import { getLessonWithProgress } from "@/services/lesson-service"
import { lessonProgressPercentage } from "@/utils/lesson-progress-percentage"

const LessonPage = async () => {
	const userActiveEnrolment = await getUserActiveEnrollment()

	if (!userActiveEnrolment) {
		redirect("/courses")
	}
	const { currentLessonId } = userActiveEnrolment
	const lessonContent = await getLessonWithProgress(currentLessonId)
	const { hearts } = await getUsersStats()

	const initialLessonPercentage = lessonProgressPercentage(
		lessonContent.challenges,
	)

	return (
		<div>
			<Quiz
				initialLessonId={currentLessonId}
				initialChallenges={lessonContent.challenges}
				initialPercentage={initialLessonPercentage}
				initialHearts={hearts}
				userSubscription={null}
			/>
		</div>
	)
}

export default LessonPage
