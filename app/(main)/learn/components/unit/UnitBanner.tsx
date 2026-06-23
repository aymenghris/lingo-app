import { NotebookTextIcon } from "lucide-react"
import Link from "next/link"
import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface UnitBannerProps {
	title: string
	description: string
}
export const UnitBanner: FC<UnitBannerProps> = ({ title, description }) => (
	<div
		className={cn(
			"flex items-center justify-between",
			"w-full p-5",
			"text-white",
			"rounded-xl bg-green-500",
		)}
	>
		<div className="space-y-2.5 [&>*]:first-letter:uppercase">
			<h3 className="font-bold text-2xl">{title}</h3>
			<p className="text-lg">{description}</p>
		</div>

		<Link href="/lesson">
			<Button
				size="lg"
				variant="secondary"
				className="hidden border-2 border-b-4 active:border-b-2 xl:flex"
			>
				<NotebookTextIcon className="mr-2" />
				continue
			</Button>
		</Link>
	</div>
)
