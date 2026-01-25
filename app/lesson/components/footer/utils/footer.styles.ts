import type { FooterTypes } from "@lesson/components/footer/utils/footer.types"
import { cn } from "@/lib/utils"

type StyleContext = Pick<FooterTypes, "challengeStatus">

export const getFooterStyles = ({ challengeStatus }: StyleContext) =>
	cn(
		"h-25 border-t-2 lg:h-35",
		challengeStatus === "correct" && "border-transparent bg-green-100",
		challengeStatus === "wrong" && "border-transparent bg-rose-100",
	)
