import { Header } from "@learn/components"
import { UserProgress } from "@/components/UserProgress"
import { FeedWrapper, StickyWrapper } from "@/components/wrappers"

const LearnPage = () => (
	<div className="flex flex-row-reverse gap-12 px-6">
		<StickyWrapper>
			<UserProgress
				activeCourse={{ title: "arabic", flagSrc: "/flags/dz.svg" }}
				hearts={5}
				points={100}
				hasSubscription={false}
			/>
		</StickyWrapper>

		<FeedWrapper>
			<Header title="Arabic" />
		</FeedWrapper>
	</div>
)

export default LearnPage
