import { ShopItems } from "@shop/components/ShopItems"
import Image from "next/image"
import { UserProgress } from "@/components/UserProgress"
import { FeedWrapper } from "@/components/wrappers"
import { assetsPath } from "@/constants"
import { getAuthenticatedUserData } from "@/utils/get-user-data"

const ShopPage = async () => {
	const { userActiveCourse, hearts, points, isSubscribed } =
		await getAuthenticatedUserData()

	return (
		<div className="flex flex-row-reverse gap-12 px-6">
			<UserProgress
				activeCourse={userActiveCourse}
				hearts={hearts}
				points={points}
				isSubscribed={isSubscribed}
			/>

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
