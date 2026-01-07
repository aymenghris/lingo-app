"use client"

import { BouncingTooltip } from "@learn/components/lesson/BouncingTooltip"
import { LessonProgressbar } from "@learn/components/lesson/LessonProgressbar"
import { calculateLessonPosition } from "@learn/utils/calculate-lesson-position"
import { determineLessonIndex } from "@learn/utils/lesson-utils"
import { CheckIcon, CrownIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ChallengeWithCompletedState } from "@/types/challenges.types"
import type { LessonState } from "@/types/lessons.types"
import type { UnitInfo } from "@/types/unit.types"
import { lessonProgressPercentage } from "@/utils/lesson-progress-percentage"

interface LessonsProps {
	id: number
	placement: number
	state: LessonState
	challenges: ChallengeWithCompletedState[]
	unit: UnitInfo
}

export const Lesson: FC<LessonsProps> = ({
	placement,
	state,
	challenges,
	unit,
}) => {
	const indexState = determineLessonIndex(placement, unit.totalLessons)

	// Convert to a 0-based index for calculation.
	const leftPosition = `${calculateLessonPosition(unit.placement, placement - 1)}px`

	const marginTop =
		indexState === "first" && state !== "completed" ? "60px" : "0px"

	const progressPercentage = lessonProgressPercentage(challenges)

	const LessonIcon = () => {
		const getLessonIcon = () => {
			if (state === "completed") return CheckIcon
			if (indexState === "last") return CrownIcon
			return StarIcon
		}

		const IconComponent = getLessonIcon()

		return (
			<IconComponent
				className={cn(
					"size-10",
					state === "locked"
						? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
						: "fill-primary-foreground text-primary-foreground",
					state === "completed" && "fill-none stroke-4",
				)}
			/>
		)
	}

	const lessonHref =
		state === "completed" ? `/lesson/${placement}` : "/lesson"

	return (
		<Link
			href={lessonHref}
			aria-disabled={state === "locked"}
			style={{ marginTop, left: leftPosition }}
			className={cn(
				"flex items-center justify-center",
				"relative size-25",
				state === "locked"
					? "pointer-events-none"
					: "pointer-events-auto",
			)}
		>
			<Button
				size="rounded"
				variant={state === "locked" ? state : "secondary"}
				className="size-17.5 border-b-8"
			>
				<LessonIcon />
			</Button>

			{state === "current" && (
				<>
					<BouncingTooltip />
					<LessonProgressbar percentage={progressPercentage} />
				</>
			)}
		</Link>
	)
}
