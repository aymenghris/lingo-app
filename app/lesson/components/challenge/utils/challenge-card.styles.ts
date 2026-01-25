import type { ChallengeCardTypes } from "@lesson/components/challenge/utils/challenge-card.types"
import { cn } from "@/lib/utils"
import type { ChallengeTypes } from "@/types/challenges.types"

type StyleContext = Pick<
	ChallengeCardTypes,
	"isOptionSelected" | "challengeStatus"
>

type CardStylesContext = Pick<
	ChallengeCardTypes,
	"isOptionSelected" | "challengeStatus" | "challengeType" | "disabled"
>

export const getCardStyles = ({
	isOptionSelected,
	challengeStatus,
	disabled,
	challengeType,
}: CardStylesContext) =>
	cn(
		"h-full rounded-xl border-2 border-b-4 p-4 lg:p-6",
		challengeType === "assist" && "w-full lg:p-3",
		!disabled
			? "cursor-pointer hover:bg-black/5 active:mt-[2px] active:border-b-2"
			: "pointer-events-none",
		isOptionSelected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
		isOptionSelected &&
			challengeStatus === "correct" &&
			"border-green-300 bg-green-100 hover:bg-green-100",
		isOptionSelected &&
			challengeStatus === "wrong" &&
			"border-rose-300 bg-rose-100 hover:bg-rose-100",
	)

export const getTextStyles = ({
	isOptionSelected,
	challengeStatus,
}: StyleContext) =>
	cn(
		"text-neutral-600 text-sm lg:text-base",
		isOptionSelected && "text-sky-500",
		isOptionSelected && challengeStatus === "correct" && "text-green-500",
		isOptionSelected && challengeStatus === "wrong" && "text-rose-500",
	)

export const getShortcutStyles = ({
	isOptionSelected,
	challengeStatus,
}: StyleContext) =>
	cn(
		"flex size-5 items-center justify-center rounded-lg border-2 lg:size-7.5",
		"font-semibold text-neutral-400 text-xs lg:text-[15px]",
		isOptionSelected && "border-sky-300 text-sky-500",
		isOptionSelected &&
			challengeStatus === "correct" &&
			"border-green-500 text-green-500",
		isOptionSelected &&
			challengeStatus === "wrong" &&
			"border-rose-500 text-rose-500",
	)

export const getContentLayoutStyles = (type: ChallengeTypes) =>
	cn(
		"flex items-center justify-between",
		type === "assist" && "flex-row-reverse",
	)
