import type { FooterTypes } from "@lesson/components/footer/utils/footer.types"
import type { FC } from "react"
import { useMedia } from "react-use"
import { Button } from "@/components/ui/button"

type PracticeButtonProps = Pick<FooterTypes, "lessonId" | "quizState">

export const PracticeButton: FC<PracticeButtonProps> = ({
	lessonId,
	quizState,
}) => {
	const isMobile = useMedia("(max-width: 1024px)")
	if (quizState !== "completed") return null

	return (
		<Button
			variant="default"
			size={isMobile ? "sm" : "lg"}
			onClick={() => {
				window.location.href = `/lesson/${lessonId}`
			}}
		>
			Practice again
		</Button>
	)
}
