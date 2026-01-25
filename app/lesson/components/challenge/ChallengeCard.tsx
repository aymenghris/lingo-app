import { CardContent } from "@lesson/components/challenge/CardContent"
import { getCardStyles } from "@lesson/components/challenge/utils/challenge-card.styles"
import type { ChallengeCardTypes } from "@lesson/components/challenge/utils/challenge-card.types"
import Image from "next/image"
import type { FC } from "react"
import { useChallengeCard } from "@/hooks/useChallengeCard"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import type { ChallengeOption } from "@/types/challenge-options.types"

type ChallengeCardProps = {
	option: ChallengeOption
} & Pick<ChallengeCardTypes, "challengeType">

export const ChallengeCard: FC<ChallengeCardProps> = ({
	option,
	challengeType,
}) => {
	const { selectedOptionId, pending, selectOption, challengeStatus } =
		useQuizInteractionStoreSelector()

	const isOptionSelected = selectedOptionId === option.id

	const onOptionClick = () => selectOption(option.id)

	const { audioElement, handleClick } = useChallengeCard({
		audioSrc: option.audioSrc,
		placement: option.placement,
		onOptionClick,
		disabled: pending,
	})

	return (
		<button
			type="button"
			onClick={handleClick}
			className={getCardStyles({
				isOptionSelected,
				challengeStatus,
				disabled: pending,
				challengeType,
			})}
		>
			{audioElement}

			{option.imageSrc && (
				<div className="mb-4">
					<Image
						src={option.imageSrc}
						alt={option.textContent}
						width={150}
						height={150}
					/>
				</div>
			)}

			<CardContent
				textContent={option.textContent}
				shortcut={option.placement}
				isOptionSelected={isOptionSelected}
				challengeType={challengeType}
				challengeStatus={challengeStatus}
			/>
		</button>
	)
}
