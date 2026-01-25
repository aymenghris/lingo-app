import { create } from "zustand"
import { useShallow } from "zustand/react/shallow"

interface ExitModalState {
	isOpen: boolean
	openModal: () => void
	closeModal: () => void
}

export const useExitModal = create<ExitModalState>((set) => ({
	isOpen: false,
	openModal: () => set({ isOpen: true }),
	closeModal: () => set({ isOpen: false }),
}))

const useExitModalSelector = () => {
	return useExitModal(
		useShallow((state) => ({
			isOpen: state.isOpen,

			openModal: state.openModal,
			closeModal: state.closeModal,
		})),
	)
}

export { useExitModalSelector }
