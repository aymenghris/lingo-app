import { getUserActiveEnrollment, getUsersStats } from "@database/queries"
import { redirect } from "next/navigation"
import { Quiz } from "@/app/lesson/Quiz"
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
				initialLessonChallenges={lessonContent.challenges}
				initialLessonPercentage={initialLessonPercentage}
				initialHearts={hearts}
				userSubscription={null}
			/>
		</div>
	)
}

export default LessonPage
