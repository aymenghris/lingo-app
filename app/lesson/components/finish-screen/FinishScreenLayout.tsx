import { ConfettiExplosion } from "@lesson/components/finish-screen/ConfettiExplosion"
import type { FC, ReactNode } from "react"
import { useAudio } from "react-use"
import { cn } from "@/lib/utils"

interface FinishScreenLayoutProps {
	children: ReactNode
	footer: ReactNode
}

export const FinishScreenLayout: FC<FinishScreenLayoutProps> = ({
	children,
	footer,
}) => {
	const [finishAudioElement] = useAudio({
		src: "/sounds/finish.mp3",
		autoPlay: true,
	})

	return (
		<div className="flex h-screen flex-col">
			<main
				className={cn(
					"flex flex-1 flex-col items-center justify-center gap-y-4",
					"mx-auto max-w-lg",
					"text-center",
					"lg:gap-y-8",
				)}
			>
				{children}
			</main>

			{footer}
			{finishAudioElement}
			<ConfettiExplosion />
		</div>
	)
}
