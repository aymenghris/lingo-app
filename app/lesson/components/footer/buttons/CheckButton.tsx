import type { FooterTypes } from "@lesson/components/footer/utils/footer.types"
import type { FC } from "react"
import { useKey, useMedia } from "react-use"
import { Button } from "@/components/ui/button"

type CheckButtonProps = Pick<
	FooterTypes,
	"onCheckSolution" | "status" | "disabled"
>

export const CheckButton: FC<CheckButtonProps> = ({
	onCheckSolution,
	status,
	disabled,
}) => {
	const isMobile = useMedia("(max-width: 1024px)")
	useKey("Enter", onCheckSolution, {}, [onCheckSolution])

	const buttonContent = {
		none: "check",
		correct: "next",
		wrong: "retry",
		completed: "continue",
	}

	return (
		<Button
			disabled={disabled}
			className="ml-auto"
			onClick={onCheckSolution}
			size={isMobile ? "sm" : "lg"}
			variant={status === "wrong" ? "danger" : "secondary"}
		>
			{buttonContent[status]}
		</Button>
	)
}
