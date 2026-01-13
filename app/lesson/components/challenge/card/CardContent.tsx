import type { FC } from "react"
import type { ChallengeStatus, ChallengeTypes } from "@/types/challenges.types"
import { getContentLayoutStyles, getTextStyles } from "./challenge-card.styles"
import { ShortcutBadge } from "./ShortcutBadge"

interface CardContentProps {
	text: string
	shortcut: string
	type: ChallengeTypes
	selected?: boolean
	status?: ChallengeStatus
}

export const CardContent: FC<CardContentProps> = ({
	text,
	shortcut,
	type,
	selected,
	status,
}) => (
	<div className={getContentLayoutStyles(type)}>
		{type === "assist" && <div />}
		<p className={getTextStyles({ selected, status })}>{text}</p>
		<ShortcutBadge
			shortcut={shortcut}
			selected={selected}
			status={status}
		/>
	</div>
)
