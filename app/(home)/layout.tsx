import { Header } from "@home/header/Header"
import type { FC, ReactNode } from "react"

interface MarketingLayoutProps {
	children: ReactNode
}

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="fle-col flex flex-1 items-center justify-center">
				{children}
			</main>
		</div>
	)
}

export default MarketingLayout
