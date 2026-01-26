import { create } from "zustand"
import { useShallow } from "zustand/react/shallow"

interface ModalState {
	// Exit Modal State
	isExitOpen: boolean
	openExit: () => void
	closeExit: () => void

	// Hearts Modal State
	isHeartsOpen: boolean
	openHearts: () => void
	closeHearts: () => void

	// Practice Modal State
	isPracticeOpen: boolean
	openPractice: () => void
	closePractice: () => void
}

const useModalStore = create<ModalState>((set) => ({
	// Exit Logic
	isExitOpen: false,
	openExit: () => set({ isExitOpen: true }),
	closeExit: () => set({ isExitOpen: false }),

	// Hearts Logic
	isHeartsOpen: false,
	openHearts: () => set({ isHeartsOpen: true }),
	closeHearts: () => set({ isHeartsOpen: false }),

	// Practice Logic
	isPracticeOpen: false,
	openPractice: () => set({ isPracticeOpen: true }),
	closePractice: () => set({ isPracticeOpen: false }),
}))

export const useExitModal = () => {
	return useModalStore(
		useShallow((state) => ({
			isOpen: state.isExitOpen,
			openModal: state.openExit,
			closeModal: state.closeExit,
		})),
	)
}

export const useHeartsModal = () => {
	return useModalStore(
		useShallow((state) => ({
			isOpen: state.isHeartsOpen,
			openModal: state.openHearts,
			closeModal: state.closeHearts,
		})),
	)
}

export const usePracticeModal = () => {
	return useModalStore(
		useShallow((state) => ({
			isOpen: state.isPracticeOpen,
			openModal: state.openPractice,
			closeModal: state.closePractice,
		})),
	)
}
