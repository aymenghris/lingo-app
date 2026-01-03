"use client"

import { LessonProgressbar } from "@learn/components/lesson/LessonProgressbar"
import { calculateLessonPosition } from "@learn/utils/calculate-lesson-position"
import { determineLessonIndex } from "@learn/utils/lesson-button-utils"
import { CheckIcon, CrownIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUnitContext } from "@/provider/UnitProvider"

type LessonState = "current" | "completed" | "locked"

interface LessonButtonProps {
	lessonState: LessonState
	lessonPlacement: number
	lessonProgressPercentage: number
}

export const LessonButton: FC<LessonButtonProps> = ({
	lessonState,
	lessonPlacement,
	lessonProgressPercentage,
}) => {
	const { unitPlacement, totalLessonsCount } = useUnitContext()

	const lessonIndexState = determineLessonIndex(
		lessonPlacement,
		totalLessonsCount,
	)

	const leftPosition = `${calculateLessonPosition(unitPlacement, lessonPlacement)}px`

	const marginTop =
		lessonIndexState === "first" && lessonState !== "completed"
			? "60px"
			: "5px"

	const LessonIcon = () => {
		const getLessonIcon = () => {
			if (lessonState === "completed") return CheckIcon
			if (lessonIndexState === "last") return CrownIcon
			return StarIcon
		}

		const IconComponent = getLessonIcon()

		return (
			<IconComponent
				className={cn(
					"size-10",
					lessonState === "locked"
						? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
						: "fill-primary-foreground text-primary-foreground",
					lessonState === "completed" && "fill-none stroke-4",
				)}
			/>
		)
	}

	const BouncingTooltip = () => (
		<div>
			{/*Avoid using translate utility class, it conflicts with the animations*/}
			<div
				className={cn(
					"-top-6 absolute left-2.5 px-3 py-2.5",
					"font-bold text-green-500 uppercase tracking-wide",
					"rounded-xl border-2 bg-white",
					"animate-bounce",
					"z-10",
				)}
			>
				start
				<div
					className={cn(
						"-bottom-2 -translate-x-1/2 absolute left-1/2 size-4",
						"rounded-xs border-2 border-gray-100 border-t-transparent border-l-transparent bg-white",
						"rotate-45",
					)}
				/>
			</div>
		</div>
	)

	const lessonHref =
		lessonState === "completed" ? `/lesson/${lessonPlacement}` : "/lesson"

	return (
		<Link
			href={lessonHref}
			aria-disabled={lessonState === "locked"}
			style={{ marginTop, left: leftPosition }}
			className={cn(
				"flex items-center justify-center",
				"relative size-25",
				lessonState === "locked"
					? "pointer-events-none"
					: "pointer-events-auto",
			)}
		>
			<Button
				size="rounded"
				variant={lessonState === "locked" ? lessonState : "secondary"}
				className="size-17.5 border-b-8"
			>
				<LessonIcon />
			</Button>

			{lessonState === "current" && (
				<>
					<BouncingTooltip />
					<LessonProgressbar percentage={lessonProgressPercentage} />
				</>
			)}
		</Link>
	)
}
