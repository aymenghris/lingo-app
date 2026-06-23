import type { FC, ReactNode } from "react"

interface QuizCardProps {
	title: string
	children: ReactNode
}

export const QuizCard: FC<QuizCardProps> = ({ title, children }) => (
	<div className="flex flex-col gap-y-12 max-lg:px-6 lg:min-h-87.5 lg:min-w-150">
		<h1 className="font-bold text-lg text-neutral-700 first-letter:uppercase max-lg:text-center lg:text-3xl">
			{title}
		</h1>
		<div>{children}</div>
	</div>
)
