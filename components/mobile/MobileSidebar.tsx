import { MenuIcon } from "lucide-react"
import { Sidebar } from "@/components/sidebar/Sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const MobileSidebar = () => (
	<Sheet>
		<SheetTrigger>
			<MenuIcon className="cursor-pointer" />
		</SheetTrigger>
		<SheetContent side="left">
			<Sidebar />
		</SheetContent>
	</Sheet>
)
