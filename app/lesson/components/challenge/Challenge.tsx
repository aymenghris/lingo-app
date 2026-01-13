import { ChallengeCard } from "@lesson/components/challenge/ChallengeCard"
import { ChallengeGrid } from "@lesson/components/challenge/ChallengeGrid"
import type { FC } from "react"
import type { ChallengeOption } from "@/types/challenge-options.types"
import type { ChallengeStatus, ChallengeTypes } from "@/types/challenges.types"

interface ChallengeProps {
	options: ChallengeOption[]
	status: ChallengeStatus
	onSelect: (id: number) => void
	type: ChallengeTypes
	selectedOption?: number
	disabled?: boolean
}
export const Challenge: FC<ChallengeProps> = ({
	options,
	status,
	onSelect,
	selectedOption,
	disabled,
	type,
}) => {
	return (
		<ChallengeGrid type={type}>
			{options.map((option, i) => (
				<ChallengeCard
					key={option.id}
					option={option}
					shortcut={`${i + 1}`}
					selected={selectedOption === option.id}
					onClick={() => onSelect(option.id)}
					status={status}
					disabled={disabled}
					type={type}
				/>
			))}
		</ChallengeGrid>
	)
}
