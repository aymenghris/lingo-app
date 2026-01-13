import type { FC, ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { ChallengeTypes } from "@/types/challenges.types"

interface ChallengeGridProps {
	type: ChallengeTypes
	children: ReactNode
}

export const ChallengeGrid: FC<ChallengeGridProps> = ({ type, children }) => (
	<div
		className={cn(
			"grid gap-2",
			type === "assist" && "grid-cols-1",
			type === "select" &&
				"grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
		)}
	>
		{children}
	</div>
)
