"use client"

import { ItemsCard } from "@shop/components/ItemsCard"
import { PointsLabel } from "@shop/components/PointsLabel"
import { type FC, useTransition } from "react"
import { toast } from "sonner"
import { refillHearts } from "@/actions/refill-hearts"
import { createStripeUrl } from "@/actions/user-subscription"
import { Button } from "@/components/ui/button"
import { assetsPath } from "@/constants"

const POINTS_TO_REFILL = 50
const MAX_HEARTS = 5

interface ShopItemsProps {
	hearts: number
	points: number
	hasSubscription: boolean
}

export const ShopItems: FC<ShopItemsProps> = ({
	hearts,
	points,
	hasSubscription,
}) => {
	const [isPending, startTransition] = useTransition()

	const isFullHealth = hearts === MAX_HEARTS
	const isEnoughPoints = points >= POINTS_TO_REFILL

	const canRefill = !isFullHealth && isEnoughPoints && !isPending

	const onRefillHearts = () => {
		if (!canRefill) return

		startTransition(() => {
			refillHearts().catch(() => toast.error("Something went wrong"))
		})
	}

	const onUpgrade = () => {
		startTransition(() => {
			createStripeUrl()
				.then((response) => {
					if (response.data) {
						window.location.href = response.data
					}
				})
				.catch(() => toast.error("Something went wrong"))
		})
	}

	return (
		<div className="w-full">
			<ItemsCard label="Refill hearts" imageSrc={assetsPath.icons.heart}>
				<Button
					onClick={onRefillHearts}
					disabled={!canRefill || hasSubscription}
				>
					{isFullHealth ? (
						"full"
					) : (
						<PointsLabel amount={POINTS_TO_REFILL} />
					)}
				</Button>
			</ItemsCard>

			<ItemsCard
				label="Unlimted hearts"
				imageSrc={assetsPath.icons.sparklingHeart}
			>
				<Button onClick={onUpgrade} disabled={isPending}>
					{hasSubscription ? "settings" : "upgrade"}
				</Button>
			</ItemsCard>
		</div>
	)
}
