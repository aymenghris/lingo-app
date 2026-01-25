import {
	getContentLayoutStyles,
	getShortcutStyles,
	getTextStyles,
} from "@lesson/components/challenge/utils/challenge-card.styles"
import type { ChallengeCardTypes } from "@lesson/components/challenge/utils/challenge-card.types"
import type { FC } from "react"

type CardContentProps = { textContent: string; shortcut: number } & Pick<
	ChallengeCardTypes,
	"isOptionSelected" | "challengeType" | "challengeStatus"
>

export const CardContent: FC<CardContentProps> = ({
	textContent,
	shortcut,
	isOptionSelected,
	challengeType,
	challengeStatus,
}) => (
	<div className={getContentLayoutStyles(challengeType)}>
		{challengeType === "assist" && <div />}

		<p className={getTextStyles({ isOptionSelected, challengeStatus })}>
			{textContent}
		</p>

		<div
			className={getShortcutStyles({ isOptionSelected, challengeStatus })}
		>
			{shortcut}
		</div>
	</div>
)
