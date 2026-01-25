import Image from "next/image"
import type { FC } from "react"
import { assetsPath } from "@/constants"
import { cn } from "@/lib/utils"

export const QuestionBubble: FC<{ question: string }> = ({ question }) => {
	return (
		<div className="mb-6 flex items-center gap-x-4">
			<Image
				src={assetsPath.public.mascot}
				alt="mascot"
				width={60}
				height={60}
				className="size-10 lg:size-15"
			/>
			<div className="relative rounded-xl border-2 px-4 py-2 max-lg:text-sm">
				{question}

				<div
					className={cn(
						"-left-2 absolute top-1/2 size-0",
						"border-y-8 border-y-transparent border-r-8",
						"-translate-y-1/2",
					)}
				/>
			</div>
		</div>
	)
}
