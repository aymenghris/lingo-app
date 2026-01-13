import {
	CardContent,
	CardImage,
	getCardStyles,
} from "@lesson/components/challenge/card"
import type { FC } from "react"
import { useChallengeCard } from "@/hooks/useChallengeCard"
import type { ChallengeOption } from "@/types/challenge-options.types"
import type { ChallengeStatus, ChallengeTypes } from "@/types/challenges.types"

export type ChallengeCardProps = {
	option: ChallengeOption
	shortcut: string
	onClick: () => void
	type: ChallengeTypes
	selected?: boolean
	status?: ChallengeStatus
	disabled?: boolean
}

export const ChallengeCard: FC<ChallengeCardProps> = ({
	option,
	shortcut,
	onClick,
	type,
	selected,
	status,
	disabled,
}) => {
	const { audioElement, handleClick } = useChallengeCard({
		audioSrc: option.audioSrc,
		shortcut,
		onClick,
		disabled,
	})

	return (
		<button
			type="button"
			onClick={handleClick}
			className={getCardStyles({ selected, status, disabled, type })}
		>
			{audioElement}

			{option.imageSrc && (
				<CardImage src={option.imageSrc} alt={option.textContent} />
			)}

			<CardContent
				text={option.textContent}
				shortcut={shortcut}
				type={type}
				selected={selected}
				status={status}
			/>
		</button>
	)
}
