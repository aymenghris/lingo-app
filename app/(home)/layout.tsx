import { Footer } from "@home/Footer"
import { Header } from "@home/Header"
import type { FC, ReactNode } from "react"

interface HomeLayoutProps {
	children: ReactNode
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="fle-col flex flex-1 items-center justify-center">
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default HomeLayout
