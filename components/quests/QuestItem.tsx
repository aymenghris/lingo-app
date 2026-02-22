import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface QuestItemProps {
	title: string
	progress: number
	iconSrc: string
	paddings?: string
	iconSize?: number
	textSize?: string
	gapX?: string
	border?: string
	progressbarHeight?: string
	className?: string
}

export const QuestItem = ({
	title,
	progress,
	iconSrc,
	paddings = "p-4",
	iconSize = 60,
	textSize = "text-xl",
	gapX = "gap-x-4",
	border = "border-t-2",
	progressbarHeight = "h-3",
	className,
}: QuestItemProps) => {
	return (
		<li
			className={cn(
				"flex w-full items-center",
				gapX,
				border,
				paddings,
				className,
			)}
		>
			<Image
				src={iconSrc}
				alt="points"
				height={iconSize}
				width={iconSize}
			/>

			<div className="flex w-full flex-col gap-y-2">
				<p className={cn("font-bold text-neutral-700", textSize)}>
					{title}
				</p>
				<Progress value={progress} className={progressbarHeight} />
			</div>
		</li>
	)
}
