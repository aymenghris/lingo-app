import {
	ClerkLoaded,
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
} from "@clerk/nextjs"
import Link from "next/link"
import { ClerkLoadingState } from "@/components/clerk/ClerkLoadingState"
import { Button } from "@/components/ui/button"

export const HeroAuth = () => (
	<div className="flex max-w-82 flex-col gap-y-3">
		<div className="min-h-4">
			<ClerkLoadingState />
		</div>

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
					<Button
						size="lg"
						variant="primary-outline"
						className="w-full"
					>
						i already have an account
					</Button>
				</SignInButton>
			</SignedOut>
		</ClerkLoaded>
	</div>
)
