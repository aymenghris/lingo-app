import Image from "next/image"
import { assetsPath } from "@/constants"

export const Logo = () => {
	const { logo } = assetsPath.home.header

	return (
		<div className="flex items-center gap-x-3 pt-8 pb-7 pl-4">
			<Image src={logo} alt="mascot" width={40} height={40} />
			<h1 className="font-extrabold text-2xl text-green-600 tracking-wide">
				Lingo
			</h1>
		</div>
	)
}
