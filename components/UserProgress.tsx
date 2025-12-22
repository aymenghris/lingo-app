import { InfinityIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { assetsPath } from "@/constants"

interface UserProgressProps {
	activeCourse: { title: string; flagSrc: string }
	hearts: number
	points: number
	hasSubscription: boolean
}

export const UserProgress: FC<UserProgressProps> = ({
	activeCourse,
	points,
	hearts,
	hasSubscription,
}) => {
	return (
		<div className="flex items-center justify-between gap-x-2">
			{/* Course Flag */}
			<Link href="/courses">
				<Button variant="default-outline">
					<Image
						src={activeCourse.flagSrc}
						alt={activeCourse.title}
						width={32}
						height={32}
						className="rounded-md border"
					/>
				</Button>
			</Link>

			{/* Points */}
			<Link href="/shop">
				<Button variant="default-outline" className="text-orange-500">
					<Image
						src={assetsPath.userProgress.light}
						alt="points"
						width={28}
						height={28}
						className="mr-2"
					/>
					{points}
				</Button>
			</Link>

			{/* Hearts */}
			<Link href="/shop">
				<Button variant="default-outline" className="text-rose-500">
					<Image
						src={assetsPath.userProgress.heart}
						alt="hearts"
						width={22}
						height={22}
						className="mr-2"
					/>
					{hasSubscription ? (
						<InfinityIcon className="size-4 stroke-3" />
					) : (
						hearts
					)}
				</Button>
			</Link>
		</div>
	)
}
