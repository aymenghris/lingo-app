import { CheckIcon } from "lucide-react"
import Image from "next/image"
import type { FC } from "react"
import { cn } from "@/lib/utils"

type CourseCardProps = {
	title: string
	id: number
	imageSrc: string
	onClick: (id: number) => void
	disabled?: boolean
	active?: boolean
}
export const CourseCard: FC<CourseCardProps> = ({
	title,
	id,
	imageSrc,
	onClick,
	disabled,
	active,
}) => (
	<button
		type="button"
		onClick={() => onClick(id)}
		className={cn(
			"flex flex-col items-center justify-between",
			"relative h-full min-h-54.25 min-w-50 p-3 pb-6",
			"rounded-xl border-2 border-b-4",
			"cursor-pointer",
			"hover:bg-black/5 active:border-b-2",
			disabled && "pointer-events-none opacity-50",
		)}
	>
		<div>
			{active && (
				<div
					className={cn(
						"flex items-center justify-center",
						"absolute top-2.25 right-2.25",
						"rounded-md bg-green-600 p-1.5",
					)}
				>
					<CheckIcon className="size-4 stroke-4 text-white" />
				</div>
			)}
		</div>

		<Image
			src={imageSrc}
			alt={title}
			width={70}
			height={93.33}
			className="rounded-lg border object-cover"
		/>

		<p className="text-neutral-700 capitalize">{title}</p>
	</button>
)
