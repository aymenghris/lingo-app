import { cn } from "@/lib/utils"
import type { ChallengeStatus } from "@/types/challenges.types"

interface StyleContext {
	status?: ChallengeStatus | "completed"
}

export const getFooterStyles = ({ status }: StyleContext) =>
	cn(
		"h-25 border-t-2 lg:h-35",
		status === "correct" && "border-transparent bg-green-100",
		status === "wrong" && "border-transparent bg-rose-100",
	)
