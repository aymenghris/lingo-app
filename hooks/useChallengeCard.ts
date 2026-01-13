// hooks/useChallengeCard.ts
import { useCallback } from "react"
import { useAudio, useKey } from "react-use"

interface UseChallengeCardProps {
	audioSrc?: string | null
	shortcut: string
	onClick: () => void
	disabled?: boolean
}

export const useChallengeCard = ({
	audioSrc,
	shortcut,
	onClick,
	disabled,
}: UseChallengeCardProps) => {
	const [audioElement, , controls] = useAudio({ src: audioSrc || "" })

	const handleClick = useCallback(() => {
		if (disabled) return
		controls.play()
		onClick()
	}, [disabled, onClick, controls])

	useKey(shortcut, handleClick, {}, [handleClick])

	return {
		audioElement,
		handleClick,
	}
}
