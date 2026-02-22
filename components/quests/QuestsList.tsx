import Link from "next/link"
import type { FC } from "react"
import { QuestItem } from "@/components/quests/QuestItem"
import { Button } from "@/components/ui/button"
import { assetsPath, QUESTS_ITEMS } from "@/constants"

interface QuestsListProps {
	points: number
}

export const QuestsList: FC<QuestsListProps> = ({ points }) => (
	<div className="space-y-4 rounded-xl border-2 p-4">
		<div className="flex w-full items-center justify-between space-y-2">
			<h3 className="font-bold text-lg">Quests</h3>

			<Button size="sm" variant="primary-outline" asChild>
				<Link href="/quests">view all</Link>
			</Button>
		</div>

		<ul className="w-full space-y-4">
			{QUESTS_ITEMS.map((quest) => {
				const progress = (points / quest.value) * 100

				return (
					<QuestItem
						key={quest.title}
						title={quest.title}
						progress={progress}
						iconSrc={assetsPath.icons.light}
						paddings="pb-4"
						iconSize={40}
						textSize="text-sm"
						gapX="gap-x-4"
						border=""
						progressbarHeight="h-2"
					/>
				)
			})}
		</ul>
	</div>
)
