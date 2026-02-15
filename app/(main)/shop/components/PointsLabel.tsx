import Image from "next/image"
import type { FC } from "react"
import { assetsPath } from "@/constants"

export const PointsLabel: FC<{ amount: number }> = ({ amount }) => (
	<div className="flex items-center gap-x-2">
		<Image
			src={assetsPath.icons.light}
			alt="points"
			height={20}
			width={20}
		/>
		<span className="font-bold">{amount}</span>
	</div>
)
