import { CheckButton, PracticeButton } from "@lesson/components/footer/buttons"
import { FooterFeedback } from "@lesson/components/footer/FooterFeedback"
import {
	type FooterTypes,
	getFooterStyles,
} from "@lesson/components/footer/utils"
import type { FC } from "react"

interface FooterProps extends FooterTypes {}

export const Footer: FC<FooterProps> = ({
	lessonId,
	onCheckSolution,
	status,
	disabled,
}) => (
	<footer className={getFooterStyles({ status })}>
		<div className="mx-auto flex h-full max-w-285 items-center justify-between px-6 lg:px-10">
			<FooterFeedback status={status} />
			<PracticeButton status={status} lessonId={lessonId} />
			<CheckButton
				onCheckSolution={onCheckSolution}
				status={status}
				disabled={disabled}
			/>
		</div>
	</footer>
)
