import { useCallback } from "react"
import { useAudio, useKey } from "react-use"

interface UseChallengeCardProps {
	audioSrc: string | null
	placement: number
	onOptionClick: () => void
	disabled: boolean
}

/**
 * Minimal Base64-encoded silent WAV.
 * Used as a dummy source for <audio> elements to ensure the 'src' is valid
 */
const SILENT_AUDIO =
	"data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="

export const useChallengeCard = ({
	audioSrc,
	placement,
	onOptionClick,
	disabled,
}: UseChallengeCardProps) => {
	const [audioElement, , controls] = useAudio({
		src: audioSrc || SILENT_AUDIO,
	})

	const handleClick = useCallback(() => {
		if (disabled) return
		controls.volume(0.3)
		controls.play()
		onOptionClick()
	}, [disabled, onOptionClick, controls])

	useKey(placement.toString(), handleClick, {}, [handleClick])

	return {
		audioElement,
		handleClick,
	}
}
