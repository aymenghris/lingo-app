import {
	ClerkLoaded,
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
} from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const HeroAuth = () => (
	<ClerkLoaded>
		<SignedIn>
			<Button size="lg" variant="secondary">
				<Link href="/learn">continue learning</Link>
			</Button>
		</SignedIn>

		<SignedOut>
			<SignUpButton>
				<Button size="lg" variant="secondary" className="w-full">
					get started
				</Button>
			</SignUpButton>
			<SignInButton mode="modal">
				<Button size="lg" variant="primary-outline" className="w-full">
					i already have an account
				</Button>
			</SignInButton>
		</SignedOut>
	</ClerkLoaded>
)
