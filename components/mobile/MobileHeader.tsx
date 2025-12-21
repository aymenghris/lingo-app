import { MobileSidebar } from "@/components/mobile/MobileSidebar"
import { cn } from "@/lib/utils"

export const MobileHeader = () => (
	<nav
		className={cn(
			"flex items-center",
			"fixed top-0 h-12.5 w-full px-6",
			"border-b-2 bg-amber-500",
			"z-10",
			"lg:hidden",
		)}
	>
		<MobileSidebar />
	</nav>
)
