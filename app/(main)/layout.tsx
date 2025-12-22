import type { FC, ReactNode } from "react"
import { MobileHeader } from "@/components/mobile/MobileHeader"
import { Sidebar } from "@/components/sidebar/Sidebar"

interface MainLayout {
	children: ReactNode
}

const MainLayout: FC<MainLayout> = ({ children }) => (
	<>
		<MobileHeader />
		<Sidebar className="hidden lg:flex" />
		<main className="h-screen max-lg:pt-12.5 lg:pl-64">
			<div className="mx-auto h-full max-w-264 pt-6">{children}</div>
		</main>
	</>
)

export default MainLayout
