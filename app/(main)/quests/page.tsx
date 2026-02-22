import Image from "next/image"
import { QuestItem } from "@/components/quests/QuestItem"
import { UserProgress } from "@/components/UserProgress"
import { FeedWrapper } from "@/components/wrappers"
import { assetsPath, QUESTS_ITEMS } from "@/constants"
import { getAuthenticatedUserData } from "@/utils/get-user-data"

const QuestsPage = async () => {
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
						src={assetsPath.icons.bullseye}
						alt="quests"
						width={90}
						height={90}
					/>
				</div>

				<h1 className="my-6 text-center font-bold text-2xl text-neutral-800 first-letter:uppercase">
					quests
				</h1>

				<p className="mb-6 text-center text-lg text-muted-foreground first-letter:uppercase">
					complete quests by earning points.
				</p>

				<ul className="w-full">
					{QUESTS_ITEMS.map((quest) => {
						const progress = (points / quest.value) * 100

						return (
							<QuestItem
								key={quest.title}
								title={quest.title}
								progress={progress}
								iconSrc={assetsPath.icons.light}
							/>
						)
					})}
				</ul>
			</FeedWrapper>
		</div>
	)
}

export default QuestsPage
