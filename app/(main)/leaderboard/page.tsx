import { getTopTenUsers } from "@database/queries"
import Image from "next/image"
import { StatsBar } from "@/components/StatsBar"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { FeedWrapper, StickyWrapper } from "@/components/wrappers"
import { assetsPath } from "@/constants"
import { getAuthenticatedUserData } from "@/utils/get-user-data"

const LeaderboardPage = async () => {
	const [{ userActiveCourse, hearts, points, isSubscribed }, leaderboard] =
		await Promise.all([getAuthenticatedUserData(), getTopTenUsers()])

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
						src={assetsPath.icons.medal}
						alt="leaderboard"
						width={90}
						height={90}
					/>
				</div>

				<h1 className="my-6 text-center font-bold text-2xl text-neutral-800 first-letter:uppercase">
					leaderboard
				</h1>

				<p className="mb-6 text-center text-lg text-muted-foreground first-letter:uppercase">
					see where you stand among the other learners in the
					community.
				</p>

				<Separator className="mb-4 h-0.5 rounded-full" />

				{leaderboard.map((user, index) => (
					<div
						key={user.userId}
						className="flex items-center rounded-xl p-2 px-4 hover:bg-gray-200/50"
					>
						<p className="mr-4 font-bold text-lime-700">
							{index + 1}
						</p>
						<Avatar className="mr-6 ml-3 size-12 border bg-green-500">
							<AvatarImage
								src={user.avatar}
								className="object-cover"
							/>
						</Avatar>
						<p className="flex-1 font-bold text-neutral-800">
							{user.fullName}
						</p>
						<p className="text-muted-foreground">
							{user.points} XP
						</p>
					</div>
				))}
			</FeedWrapper>
		</div>
	)
}

export default LeaderboardPage
