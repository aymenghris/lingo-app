import { FeedWrapper, StickyWrapper } from "@/components/wrappers"

const LearnPage = () => (
	<div className="flex flex-row-reverse gap-12 px-6">
		<StickyWrapper>sticky sidebar</StickyWrapper>
		<FeedWrapper>feed</FeedWrapper>
	</div>
)

export default LearnPage
