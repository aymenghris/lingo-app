import { ShopItems } from "@shop/components/ShopItems"
import Image from "next/image"
import { redirect } from "next/navigation"
import { StatsBar } from "@/components/StatsBar"
import { FeedWrapper, StickyWrapper } from "@/components/wrappers"
import { assetsPath } from "@/constants"
import { getUserActiveCourse } from "@/database/domains/enrollments/enrollments.queries"
import { getUserStats } from "@/database/domains/stats/stats.queries"
import { getUserSubscription } from "@/database/domains/users-subscriptions/users-subscriptions.queries"

const ShopPage = async () => {
	const [userActiveCourse, userSubscription] = await Promise.all([
		getUserActiveCourse(),
		getUserSubscription(),
	])

	if (!userActiveCourse) {
		redirect("/courses")
	}
	const { hearts, points } = await getUserStats()
	const isSubscribed = !!userSubscription?.isActive

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
				<div className="flex w-full flex-col items-center">
					<Image
						src={assetsPath.icons.shop}
						alt="shop"
						width={90}
						height={90}
					/>
				</div>

				<h1 className="my-6 text-center font-bold text-2xl text-neutral-800 first-letter:uppercase">
					shop
				</h1>

				<p className="mb-6 text-center text-lg text-muted-foreground first-letter:uppercase">
					spend your points on cool stuff.
				</p>

				<ShopItems
					hearts={hearts}
					points={points}
					hasSubscription={isSubscribed}
				/>
			</FeedWrapper>
		</div>
	)
}

export default ShopPage
