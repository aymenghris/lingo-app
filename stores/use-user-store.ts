import { create } from "zustand"
import { useShallow } from "zustand/react/shallow"

interface UserStats {
	hearts: number | undefined
	points: number | undefined
	hasSubscription: boolean | undefined

	initHearts: (hearts: number) => void
	decrementHearts: () => void
	incrementHearts: () => void

	incrementPoints: (points: number) => void

	setSubscription: (subscription: boolean) => void
}

const DEFAULT_HEARTS = 5

const useUserStore = create<UserStats>((set) => ({
	hearts: undefined,
	points: undefined,
	hasSubscription: undefined,

	initHearts: (hearts) => set({ hearts }),

	decrementHearts: () =>
		set((state) => {
			if (state.hearts === undefined) return state
			return { hearts: Math.max(0, state.hearts - 1) }
		}),

	incrementHearts: () =>
		set((state) => {
			if (state.hearts === undefined) return state
			return { hearts: Math.min(state.hearts + 1, DEFAULT_HEARTS) }
		}),

	incrementPoints: (points) =>
		set((state) => {
			if (state.points === undefined) return state
			return { points: state.points + points }
		}),

	setSubscription: (subscription) => set({ hasSubscription: subscription }),
}))

const useUserStoreSelector = () => {
	return useUserStore(
		useShallow((state) => ({
			hearts: state.hearts,
			points: state.points,
			hasSubscription: state.hasSubscription,

			initHearts: state.initHearts,
			decrementHearts: state.decrementHearts,
			incrementHearts: state.incrementHearts,

			incrementPoints: state.incrementPoints,
		})),
	)
}

export { useUserStore, useUserStoreSelector }
