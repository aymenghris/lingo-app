import { ExitModal, HeartsModal, PracticeModal } from "@/components/modals"
import { Toaster } from "@/components/ui/sonner"

export const Modals = () => {
	return (
		<>
			<Toaster />
			<ExitModal />
			<HeartsModal />
			<PracticeModal />
		</>
	)
}
