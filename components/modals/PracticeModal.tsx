"use client"

import { ModalWrapper } from "@/components/modals/ModalWrapper"
import { assetsPath } from "@/constants"
import { usePracticeModal } from "@/stores/use-modal-store"

export const PracticeModal = () => {
	const { isOpen, closeModal } = usePracticeModal()

	return (
		<ModalWrapper
			isOpen={isOpen}
			onOpenChange={closeModal}
			imageSrc={assetsPath.userStats.heart}
			title="Practice lesson"
			description="Practice lessons to regain hearts and Points, You won't loose hearts in practice."
			primaryButton={{
				label: "I understand",
				onClick: closeModal,
			}}
		/>
	)
}
