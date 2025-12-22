import type { FC, ReactNode } from "react"

interface FeedWrapperProps {
	children: ReactNode
}

export const FeedWrapper: FC<FeedWrapperProps> = ({ children }) => (
	<div className="relative top-0 flex-1 pb-10">{children}</div>
)
