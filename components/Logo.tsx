import Image from "next/image"
import { assetsPath } from "@/constants"

export const Logo = () => (
	<div className="flex items-center gap-x-3 pt-8 pb-7 pl-4">
		<Image
			src={assetsPath.public.mascot}
			alt="mascot"
			width={40}
			height={40}
		/>
		<h1 className="select-none font-extrabold text-2xl text-green-600 tracking-wide">
			Lingo
		</h1>
	</div>
)
