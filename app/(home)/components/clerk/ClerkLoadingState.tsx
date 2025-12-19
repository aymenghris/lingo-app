import { ClerkLoading } from "@clerk/nextjs"
import { Spinner } from "@/components/ui/spinner"

export const ClerkLoadingState = () => (
	<ClerkLoading>
		<Spinner />
	</ClerkLoading>
)
