import Image from "next/image"
import type { FC, ReactNode } from "react"
import { assetsPath } from "@/constants"
import { cn } from "@/lib/utils"

interface ResultCardProps {
	value: number | ReactNode | undefined
	variant: "points" | "hearts"
}

const VARIANT_CONFIG = {
	points: {
		label: "Total XP",
		icon: assetsPath.icons.light,
		styles: {
			borderColor: "border-orange-400",
			bgColor: "bg-orange-400",
			text: "text-orange-400",
		},
	},
	hearts: {
		label: "Hearts Left",
		icon: assetsPath.icons.heart,
		styles: {
			borderColor: "border-rose-500",
			bgColor: "bg-rose-500",
			text: "text-rose-500",
		},
	},
} as const

export const ResultCard: FC<ResultCardProps> = ({ value, variant }) => {
	const { label, icon, styles } = VARIANT_CONFIG[variant]

	return (
		<div
			className={cn(
				"w-full rounded-2xl border-2",
				styles.bgColor,
				styles.borderColor,
			)}
		>
			<div className="p-1.5 text-center font-bold text-white text-xs uppercase">
				{label}
			</div>

			<div
				className={cn(
					"flex items-center justify-center",
					"p-6",
					"font-bold text-lg",
					"rounded-2xl bg-white",
					styles.text,
				)}
			>
				<Image
					src={icon}
					alt={variant}
					width={30}
					height={30}
					className="mr-2"
				/>
				{value}
			</div>
		</div>
	)
}
