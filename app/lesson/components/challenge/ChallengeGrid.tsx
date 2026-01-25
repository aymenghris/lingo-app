import type { FC, ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { ChallengeTypes } from "@/types/challenges.types"

interface ChallengeGridProps {
	challengeType: ChallengeTypes
	children: ReactNode
}

export const ChallengeGrid: FC<ChallengeGridProps> = ({
	challengeType,
	children,
}) => (
	<div
		className={cn(
			"grid gap-2",
			challengeType === "assist" && "grid-cols-1",
			challengeType === "select" &&
				"grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
		)}
	>
		{children}
	</div>
)
