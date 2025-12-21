import {
	ClerkLoaded,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export const HeaderAuth = () => (
	<ClerkLoaded>
		<SignedIn>
			<UserButton />
		</SignedIn>

		<SignedOut>
			<SignInButton mode="modal">
				<Button size="lg" variant="default-outline">
					login
				</Button>
			</SignInButton>
		</SignedOut>
	</ClerkLoaded>
)
