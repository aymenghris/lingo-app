import type { Metadata } from "next"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Nunito } from "next/font/google"
import type { FC, ReactNode } from "react"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Lingo App",
}

interface RootLayoutProps {
	children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<ClerkProvider afterSignOutUrl="/">
			<html lang="en" className={nunito.className}>
				<body>{children}</body>
			</html>
		</ClerkProvider>
	)
}

export default RootLayout
