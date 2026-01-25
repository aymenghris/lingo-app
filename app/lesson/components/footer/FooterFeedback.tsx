import type { FooterTypes } from "@lesson/components/footer/utils/footer.types"
import { CheckCircle, XCircle } from "lucide-react"
import type { FC } from "react"
import { cn } from "@/lib/utils"

type FooterFeedbackProps = Pick<FooterTypes, "challengeStatus">

export const FooterFeedback: FC<FooterFeedbackProps> = ({
	challengeStatus,
}) => {
	if (challengeStatus !== "correct" && challengeStatus !== "wrong")
		return null

	const feedbackMap = {
		correct: {
			icon: CheckCircle,
			feedback: "nicely done!",
			styles: "text-green-500",
		},
		wrong: {
			icon: XCircle,
			feedback: "try again",
			styles: "text-rose-500",
		},
	}

	const FeedbackIcon = feedbackMap[challengeStatus].icon

	return (
		<div
			className={cn(
				"flex items-center font-bold text-base lg:text-2xl",
				feedbackMap[challengeStatus].styles,
			)}
		>
			<FeedbackIcon className="mr-2 size-6 lg:h-10 lg:w-10" />
			{feedbackMap[challengeStatus].feedback}
		</div>
	)
}
