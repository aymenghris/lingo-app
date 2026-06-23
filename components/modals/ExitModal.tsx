"use client"

import { useRouter } from "next/navigation"
import { ModalWrapper } from "@/components/modals/ModalWrapper"
import { assetsPath } from "@/constants"
import { useExitModal } from "@/stores/use-modal-store"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"

export const ExitModal = () => {
	const router = useRouter()
	const { isOpen, closeModal } = useExitModal()
	const { resetQuizState, resetQuizMode } = useQuizSessionStoreSelector()
	const { resetInteraction } = useQuizInteractionStoreSelector()

	const handleEndLesson = () => {
		closeModal()
		resetQuizState()
		resetQuizMode()
		resetInteraction()
		router.push("/learn")
	}

	return (
		<ModalWrapper
			isOpen={isOpen}
			onOpenChange={closeModal}
			imageSrc={assetsPath.modals.mascotSad}
			title="Wait don't go!"
			description="You're about to leave the lesson. Are you sure?"
			primaryButton={{
				label: "keep learning",
				onClick: closeModal,
			}}
			secondaryButton={{
				label: "end lesson",
				onClick: handleEndLesson,
				variant: "danger-outline",
			}}
		/>
	)
}
