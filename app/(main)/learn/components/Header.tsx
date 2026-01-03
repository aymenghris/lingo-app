import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
	title: string
}
export const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<div
			className={cn(
				"grid grid-cols-3 items-center",
				"sticky top-0 mb-5 pb-3",
				"text-neutral-400",
				"border-b-2 bg-white",
				"lg:-mt-6 lg:z-50 lg:pt-6",
			)}
		>
			<Link href="/learn">
				<Button variant="default-outline" size="sm">
					<ArrowLeftIcon className="size-5 stroke-2 text-neutral-400" />
				</Button>
			</Link>

			<h1 className="text-center font-bold text-lg capitalize">
				{title}
			</h1>
			<div />
		</div>
	)
}
