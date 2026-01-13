import type { FC } from "react"
import type { ChallengeStatus } from "@/types/challenges.types"
import { getShortcutStyles } from "./challenge-card.styles"

interface ShortcutBadgeProps {
	shortcut: string
	selected?: boolean
	status?: ChallengeStatus
}

export const ShortcutBadge: FC<ShortcutBadgeProps> = ({
	shortcut,
	selected,
	status,
}) => <div className={getShortcutStyles({ selected, status })}>{shortcut}</div>
