import { cn } from "@/lib/utils"
import type { ChallengeStatus, ChallengeTypes } from "@/types/challenges.types"

interface StyleContext {
	selected?: boolean
	status?: ChallengeStatus
	disabled?: boolean
	type?: ChallengeTypes
}

export const getCardStyles = ({
	selected,
	status,
	disabled,
	type,
}: StyleContext) =>
	cn(
		"h-full rounded-xl border-2 border-b-4 p-4 lg:p-6",
		type === "assist" && "w-full lg:p-3",
		!disabled
			? "cursor-pointer hover:bg-black/5 active:border-b-2"
			: "pointer-events-none",
		selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
		selected &&
			status === "correct" &&
			"border-green-300 bg-green-100 hover:bg-green-100",
		selected &&
			status === "wrong" &&
			"border-rose-300 bg-rose-100 hover:bg-rose-100",
	)

export const getTextStyles = ({ selected, status }: StyleContext) =>
	cn(
		"text-neutral-600 text-sm lg:text-base",
		selected && "text-sky-500",
		selected && status === "correct" && "text-green-500",
		selected && status === "wrong" && "text-rose-500",
	)

export const getShortcutStyles = ({ selected, status }: StyleContext) =>
	cn(
		"flex size-5 items-center justify-center rounded-lg border-2 lg:size-7.5",
		"font-semibold text-neutral-400 text-xs lg:text-[15px]",
		selected && "border-sky-300 text-sky-500",
		selected && status === "correct" && "border-green-500 text-green-500",
		selected && status === "wrong" && "border-rose-500 text-rose-500",
	)

export const getContentLayoutStyles = (type: ChallengeTypes) =>
	cn(
		"flex items-center justify-between",
		type === "assist" && "flex-row-reverse",
	)
