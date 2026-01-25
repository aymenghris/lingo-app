import { getCheckButtonConfig } from "@lesson/components/footer/buttons/utils/get-check-button-config"
import type { FooterTypes } from "@lesson/components/footer/utils/footer.types"
import type { FC } from "react"
import { useKey, useMedia } from "react-use"
import { Button } from "@/components/ui/button"

type CheckButtonProps = Pick<
	FooterTypes,
	"onCheckSolution" | "challengeStatus" | "quizState" | "disabled"
>

export const CheckButton: FC<CheckButtonProps> = ({
	onCheckSolution,
	challengeStatus,
	quizState,
	disabled,
}) => {
	const { text, variant } = getCheckButtonConfig(challengeStatus, quizState)

	const isMobile = useMedia("(max-width: 1024px)")

	useKey("Enter", onCheckSolution, {}, [onCheckSolution])

	return (
		<Button
			disabled={disabled}
			className="ml-auto"
			onClick={onCheckSolution}
			size={isMobile ? "sm" : "lg"}
			variant={variant}
		>
			{text}
		</Button>
	)
}
