"use client"

import type { FC } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export const LessonProgressbar: FC<{ percentage: number }> = ({
	percentage,
}) => {
	return (
		<div>
			<CircularProgressbar
				className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"
				value={percentage}
				styles={buildStyles({
					pathColor: "#4ADE80",
					trailColor: "#E5E5E5",
				})}
			/>
		</div>
	)
}
