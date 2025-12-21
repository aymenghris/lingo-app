import { ClerkLoadingState, HeroAuth } from "@home/components"
import Image from "next/image"
import { assetsPath } from "@/constants"
import { cn } from "@/lib/utils"

const HomePage = () => {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-247 p-4",
				"flex flex-1 flex-col items-center justify-center gap-2",
				"lg:flex-row",
			)}
		>
			<div className="relative mb-8 size-60 lg:mb-0 lg:size-106">
				<Image src={assetsPath.home.hero} alt="hero" fill />
			</div>
			<div className="flex flex-col items-center gap-y-8">
				<h1 className="max-w-120 text-center font-bold text-neutral-600 text-xl lg:text-3xl">
					Learn, practice, and master new languages with Lingo.
				</h1>

				<div className="flex max-w-82 flex-col gap-y-3">
					<div className="min-h-4">
						<ClerkLoadingState />
					</div>
					<HeroAuth />
				</div>
			</div>
		</div>
	)
}

export default HomePage
