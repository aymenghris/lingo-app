import type { FC, ReactNode } from "react"

interface QuizLayoutProps {
	header: ReactNode
	children: ReactNode
	footer: ReactNode
}

export const QuizLayout: FC<QuizLayoutProps> = ({
	header,
	children,
	footer,
}) => (
	<div className="flex h-screen flex-col">
		{header}
		<main className="flex flex-1 items-center justify-center">
			{children}
		</main>
		{footer}
	</div>
)
