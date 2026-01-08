import type { FC, ReactNode } from "react"

type LessonLayoutProps = {
	children: ReactNode
}

const LessonLayout: FC<LessonLayoutProps> = ({ children }) => {
	return (
		<div className="flex h-full flex-col">
			<div className="flex h-full w-full flex-col">{children}</div>
		</div>
	)
}

export default LessonLayout
