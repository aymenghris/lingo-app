import { Unit } from "@learn/components/unit/Unit"
import { StatsBar } from "@/components/StatsBar"
import { FeedWrapper, StickyWrapper } from "@/components/wrappers"
import { getUnitsWithProgress } from "@/services/unit-service"
import { getAuthenticatedUserData } from "@/utils/get-user-data"
import { Header } from "./components/Header"

const LearnPage = async () => {
	const { userActiveCourse, hearts, points, isSubscribed } =
		await getAuthenticatedUserData()

	const unitsData = await getUnitsWithProgress(userActiveCourse.id)

	return (
		<div className="flex flex-row-reverse gap-12 px-6">
			<StickyWrapper>
				<StatsBar
					activeCourse={userActiveCourse}
					hearts={hearts}
					points={points}
					hasSubscription={isSubscribed}
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
