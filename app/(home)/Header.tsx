import { ClerkLoadingState, HeaderAuth } from "@home/components/clerk"
import { Logo } from "@home/components/Logo"

export const Header = () => {
	return (
		<header className="h-20 w-full border-slate-200 border-b-2 px-4">
			<div className="mx-auto flex h-full items-center justify-between lg:max-w-5xl">
				<Logo />
				<ClerkLoadingState />
				<HeaderAuth />
			</div>
		</header>
	)
}
