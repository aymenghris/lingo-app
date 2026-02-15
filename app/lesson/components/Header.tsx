"use client"

import { InfinityIcon, XIcon } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { assetsPath } from "@/constants"
import { cn } from "@/lib/utils"
import { useExitModal } from "@/stores/use-modal-store"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import { useUserStoreSelector } from "@/stores/use-user-store"

export const Header = () => {
	const { openModal } = useExitModal()
	const { hearts, hasSubscription } = useUserStoreSelector()
	const { percentage } = useQuizInteractionStoreSelector()

	return (
		<header
			className={cn(
				"flex items-center justify-between gap-x-7",
				"mx-auto w-full max-w-285",
				"px-10 pt-5 lg:pt-12.5",
			)}
		>
			<XIcon
				onClick={openModal}
				className="cursor-pointer text-slate-500 transition hover:opacity-75"
			/>

			<Progress value={percentage} />

			<div className="flex items-center text-rose-600">
				<Image
					src={assetsPath.icons.heart}
					width={28}
					height={28}
					alt="heart"
					className="mr-2"
				/>

				{hasSubscription ? (
					<InfinityIcon className="size-full stroke-3" />
				) : (
					<span className="font-bold text-lg leading-none">
						{hearts}
					</span>
				)}
			</div>
		</header>
	)
}
