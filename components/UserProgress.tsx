"use client"

import { usePathname } from "next/navigation"
import type { ComponentProps, FC } from "react"
import { Promo } from "@/components/Promo"
import { QuestsList } from "@/components/quests/QuestsList"
import { StatsBar } from "@/components/StatsBar"
import { StickyWrapper } from "@/components/wrappers"

type UserProgressProps = ComponentProps<typeof StatsBar>

export const UserProgress: FC<UserProgressProps> = ({
	activeCourse,
	hearts,
	points,
	isSubscribed,
}) => {
	const pathname = usePathname()
	const isQuestsPage = pathname === "/quests"

	return (
		<StickyWrapper>
			<StatsBar
				activeCourse={activeCourse}
				hearts={hearts}
				points={points}
				isSubscribed={isSubscribed}
			/>

			{!isSubscribed && <Promo />}

			{!isQuestsPage && <QuestsList points={points} />}
		</StickyWrapper>
	)
}
