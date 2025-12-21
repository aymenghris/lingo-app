"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { FC } from "react"
import { Button } from "@/components/ui/button"

interface SidebarItemProps {
	iconSrc: string
	title: string
}

export const SidebarItem: FC<SidebarItemProps> = ({ iconSrc, title }) => {
	const href = `/${title}`
	const pathname = usePathname()
	const isActive = href === pathname

	return (
		<Button
			variant={isActive ? "primary-soft" : "default-outline"}
			className="h-13 justify-start"
			asChild
		>
			<Link href={href}>
				<Image
					src={iconSrc}
					alt={title}
					className="mr-5"
					width={32}
					height={32}
				/>
				{title}
			</Link>
		</Button>
	)
}
