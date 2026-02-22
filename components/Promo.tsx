import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { assetsPath } from "@/constants"

export const Promo = () => (
	<div className="space-y-4 rounded-xl border-2 p-4">
		<div className="space-y-2">
			<div className="flex items-center gap-x-2">
				<Image
					src={assetsPath.icons.sparklingHeart}
					alt="pro"
					width={26}
					height={26}
				/>

				<h3 className="font-bold text-lg first-letter:uppercase">
					upgrade to pro
				</h3>
			</div>

			<p className="text-muted-foreground text-sm first-letter:uppercase">
				get unlimited hearts and more!
			</p>
		</div>

		<Button variant="premium" size="lg" className="w-full" asChild>
			<Link href="/shop">upgrade now</Link>
		</Button>
	</div>
)
