import { soundsPath } from "@/constants"

const audioInstances: Record<string, HTMLAudioElement> = {}

/**
 * Internal helper to handle the Audio object creation and playback
 */
const playSound = (path: string): void => {
	// Check if we are running on the server
	if (typeof window === "undefined") return

	// Create the audio instance if it doesn't exist yet
	if (!audioInstances[path]) {
		audioInstances[path] = new Audio(path)
	}

	const audio = audioInstances[path]

	// Play and handle potential browser autoplay restrictions
	audio.play().catch((error: unknown) => {
		console.warn("SFX Playback failed:", error)
	})
}

type SfxType = {
	[key in keyof typeof soundsPath]: {
		play: () => void
	}
}

export const sfx: SfxType = {
	correct: {
		play: () => playSound(soundsPath.correct),
	},
	incorrect: {
		play: () => playSound(soundsPath.incorrect),
	},
}
