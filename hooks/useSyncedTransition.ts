import { useEffect, useTransition } from "react"
import { useQuizInteractionStoreSelector } from "@/stores/use-quiz-interaction-store"

export const useSyncedTransition = () => {
	const [isPending, startTransition] = useTransition()
	const { setPending } = useQuizInteractionStoreSelector()

	useEffect(() => {
		setPending(isPending)
	}, [isPending, setPending])

	return [isPending, startTransition] as const
}
