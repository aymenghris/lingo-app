import type { FC } from "react"
import { Logo } from "@/components/Logo"
import { SidebarAuth } from "@/components/sidebar/SidebarAuth"
import { SidebarItem } from "@/components/sidebar/SidebarItem"
import { sidebarItems } from "@/constants"
import { cn } from "@/lib/utils"

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => (
	<div
		className={cn(
			"flex flex-col",
			"top-0 left-0 h-full px-4",
			"lg:fixed lg:w-64 lg:border-r-2",
			className,
		)}
	>
		<Logo />

		<div className="flex flex-1 flex-col gap-y-2">
			{sidebarItems.map((item) => (
				<SidebarItem
					key={item.title}
					iconSrc={item.iconSrc}
					title={item.title}
				/>
			))}
		</div>

		<SidebarAuth />
	</div>
)
