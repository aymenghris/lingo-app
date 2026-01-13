import Image from "next/image"
import type { FC } from "react"

interface CardImageProps {
	src: string
	alt: string
}

export const CardImage: FC<CardImageProps> = ({ src, alt }) => (
	<div className="mb-4">
		<Image src={src} alt={alt} width={150} height={150} />
	</div>
)
