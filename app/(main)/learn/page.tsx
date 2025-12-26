import { Header } from "@learn/components"
import { redirect } from "next/navigation"
import { UserProgress } from "@/components/UserProgress"
import { FeedWrapper, StickyWrapper } from "@/components/wrappers"
import { getUserProgress } from "@/database/queries"

const LearnPage = async () => {
	const userProgressData = await getUserProgress()

	if (!userProgressData || !userProgressData?.activeCourse) {
		redirect("/courses")
	}

	const { hearts, points, activeCourse } = userProgressData

	return (
		<div className="flex flex-row-reverse gap-12 px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={activeCourse}
					hearts={hearts}
					points={points}
					hasSubscription={false}
				/>
			</StickyWrapper>

			<FeedWrapper>
				<Header title={activeCourse.title} />
			</FeedWrapper>
		</div>
	)
}

export default LearnPage
