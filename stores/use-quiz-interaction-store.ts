import { create } from "zustand"
import { useShallow } from "zustand/react/shallow"
import type { ChallengeStatus } from "@/types/challenges.types"

interface QuizInteractionStore {
	percentage: number
	selectedOptionId: number | undefined
	challengeStatus: ChallengeStatus
	pending: boolean

	initPercentage: (percentage: number) => void
	incrementPercentage: (value: number) => void

	selectOption: (optionId: number) => void
	setChallengeStatus: (status: ChallengeStatus) => void

	setPending: (pending: boolean) => void

	reset: () => void
}

const DEFAULT_PERCENTAGE = 0

const useQuizInteractionStore = create<QuizInteractionStore>((set, get) => ({
	percentage: DEFAULT_PERCENTAGE,
	selectedOptionId: undefined,
	challengeStatus: "none",
	pending: false,

	incrementPercentage: (value) =>
		set((state) => ({
			percentage: state.percentage + value,
		})),

	initPercentage: (percentage) => set({ percentage }),

	selectOption: (optionId) => {
		const { challengeStatus } = get()

		if (challengeStatus !== "none") return

		set({ selectedOptionId: optionId })
	},
	setChallengeStatus: (status) => set({ challengeStatus: status }),

	setPending: (pending) => set({ pending }),

	reset: () =>
		set({
			selectedOptionId: undefined,
			challengeStatus: "none",
			pending: false,
		}),
}))

const useQuizInteractionStoreSelector = () => {
	return useQuizInteractionStore(
		useShallow((state) => ({
			percentage: state.percentage,
			selectedOptionId: state.selectedOptionId,
			challengeStatus: state.challengeStatus,
			pending: state.pending,

			initPercentage: state.initPercentage,
			incrementPercentage: state.incrementPercentage,

			selectOption: state.selectOption,
			setChallengeStatus: state.setChallengeStatus,

			setPending: state.setPending,

			resetInteraction: state.reset,
		})),
	)
}

export { useQuizInteractionStoreSelector }
