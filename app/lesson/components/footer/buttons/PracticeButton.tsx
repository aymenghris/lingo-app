import type { FooterTypes } from "@lesson/components/footer/utils/footer.types"
import type { FC } from "react"
import { useMedia } from "react-use"
import { Button } from "@/components/ui/button"

type PracticeButtonProps = Pick<FooterTypes, "lessonId" | "status">

export const PracticeButton: FC<PracticeButtonProps> = ({
	lessonId,
	status,
}) => {
	const isMobile = useMedia("(max-width: 1024px)")

	if (status !== "completed") return null

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
