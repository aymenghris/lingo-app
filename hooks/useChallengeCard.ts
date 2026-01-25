// hooks/useChallengeCard.ts
import { useCallback } from "react"
import { useAudio, useKey } from "react-use"

interface UseChallengeCardProps {
	audioSrc?: string | null
	placement: number
	onOptionClick: () => void
	disabled?: boolean
}

export const useChallengeCard = ({
	audioSrc,
	placement,
	onOptionClick,
	disabled,
}: UseChallengeCardProps) => {
	const [audioElement, , controls] = useAudio({ src: audioSrc || "" })

	const handleClick = useCallback(() => {
		if (disabled) return
		controls.play()
		onOptionClick()
	}, [disabled, onOptionClick, controls])

	useKey(placement.toString(), handleClick, {}, [handleClick])

	return {
		audioElement,
		handleClick,
	}
}
