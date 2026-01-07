import { getUserActiveCourse, getUsersStats } from "@database/queries"
import { Unit } from "@learn/components/unit/Unit"
import { redirect } from "next/navigation"
import { StatsBar } from "@/components/StatsBar"
import { FeedWrapper, StickyWrapper } from "@/components/wrappers"
import { getUnitsWithProgress } from "@/services/unit-service"
import { Header } from "./components/Header"

const LearnPage = async () => {
	const userActiveCourse = await getUserActiveCourse()

	if (!userActiveCourse) {
		redirect("/courses")
	}
	const { hearts, points } = await getUsersStats()
	const unitsData = await getUnitsWithProgress(userActiveCourse.id)

	return (
		<div className="flex flex-row-reverse gap-12 px-6">
			<StickyWrapper>
				<StatsBar
					activeCourse={userActiveCourse}
					hearts={hearts}
					points={points}
					hasSubscription={false}
				/>
			</StickyWrapper>

			<FeedWrapper>
				<Header title={userActiveCourse.title} />
				{unitsData.map((unit) => (
					<Unit
						key={unit.id}
						id={unit.id}
						title={unit.title}
						description={unit.description}
						placement={unit.placement}
						totalLessons={unit.totalLessons}
						lessons={unit.lessons}
					/>
				))}
			</FeedWrapper>
		</div>
	)
}

export default LearnPage
