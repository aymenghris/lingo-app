import { ClerkLoaded, UserButton } from "@clerk/nextjs"
import { ClerkLoadingState } from "@/components/clerk/ClerkLoadingState"

export const SidebarAuth = () => (
	<div className="p-4">
		<ClerkLoadingState />

		<ClerkLoaded>
			<UserButton />
		</ClerkLoaded>
	</div>
)
