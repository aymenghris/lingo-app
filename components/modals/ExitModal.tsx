"use client"

import { useRouter } from "next/navigation"
import { ModalWrapper } from "@/components/modals/ModalWrapper"
import { assetsPath } from "@/constants"
import { useExitModal } from "@/stores/use-modal-store"

export const ExitModal = () => {
	const router = useRouter()
	const { isOpen, closeModal } = useExitModal()

	const handleEndLesson = () => {
		closeModal()
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
