"use client"

import { useRouter } from "next/navigation"
import { ModalWrapper } from "@/components/modals/ModalWrapper"
import { assetsPath } from "@/constants"
import { useHeartsModal } from "@/stores/use-modal-store"

export const HeartsModal = () => {
	const router = useRouter()
	const { isOpen, closeModal } = useHeartsModal()

	const handleGetHearts = () => {
		closeModal()
		router.push("/shop")
	}

	return (
		<ModalWrapper
			isOpen={isOpen}
			onOpenChange={closeModal}
			imageSrc={assetsPath.modals.mascotBad}
			title="You ran out of hearts!"
			description="Get Pro for unlimited hearts, or purchase them on the shop."
			primaryButton={{
				label: "Get unlimited hearts",
				onClick: handleGetHearts,
			}}
			secondaryButton={{
				label: "No thanks",
				onClick: closeModal,
			}}
		/>
	)
}
