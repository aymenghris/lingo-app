"use client"

import ReactConfetti from "react-confetti"

export const ConfettiExplosion = () => {
	return (
		<ReactConfetti
			recycle={false}
			numberOfPieces={500}
			tweenDuration={1000}
		/>
	)
}
