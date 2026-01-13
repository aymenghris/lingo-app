import type { FooterTypes } from "@lesson/components/footer/utils/footer.types"
import { CheckCircle, XCircle } from "lucide-react"
import type { FC } from "react"
import { cn } from "@/lib/utils"

type FooterFeedbackProps = Pick<FooterTypes, "status">

export const FooterFeedback: FC<FooterFeedbackProps> = ({ status }) => {
	if (status !== "correct" && status !== "wrong") return

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

	const FeedbackIcon = feedbackMap[status].icon

	return (
		<div
			className={cn(
				"flex items-center font-bold text-base lg:text-2xl",
				feedbackMap[status].styles,
			)}
		>
			<FeedbackIcon className="mr-2 size-6 lg:h-10 lg:w-10" />
			{feedbackMap[status].feedback}
		</div>
	)
}
