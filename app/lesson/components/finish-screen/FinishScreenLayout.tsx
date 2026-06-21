import { ConfettiExplosion } from "@lesson/components/finish-screen/ConfettiExplosion"
import { type FC, type ReactNode, useEffect } from "react"
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
	const [finishAudioElement, _state, controls] = useAudio({
		src: "/sounds/finish.mp3",
		autoPlay: true,
	})

	useEffect(() => {
		controls.volume(0.3)
	}, [controls])

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
