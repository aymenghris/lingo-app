import Image from "next/image"
import type { FC, ReactNode } from "react"

type ItemsCardProps = {
	label: string
	imageSrc: string
	children: ReactNode
}

export const ItemsCard: FC<ItemsCardProps> = ({
	label,
	imageSrc,
	children,
}) => {
	return (
		<div className="flex w-full items-center gap-x-4 border-t-2 p-4">
			<Image src={imageSrc} alt={label} height={60} width={60} />

			<div className="flex-1">
				<p className="font-bold text-base text-neutral-700 lg:text-xl">
					{label}
				</p>
			</div>

			{children}
		</div>
	)
}
