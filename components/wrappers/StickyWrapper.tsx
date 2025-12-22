import type { FC, ReactNode } from "react"

interface StickyWrapperProps {
	children: ReactNode
}
export const StickyWrapper: FC<StickyWrapperProps> = ({ children }) => (
	/**
	 * How They Work Together:
	 * - Scrolling Down: The outer sticky bottom-6 keeps the wrapper from disappearing off the bottom
	 * - Scrolling Up: The inner sticky top-6 keeps the content pinned near the top
	 * - Result: The sidebar content appears to "stick" in place while the feed scrolls,
	 * 	creating a smooth, always-visible sidebar effect
	 */

	<div className="sticky bottom-6 hidden w-92 self-end lg:block">
		<div className="sticky top-6 flex min-h-screen-minus-header flex-col gap-y-4">
			{children}
		</div>
	</div>
)
