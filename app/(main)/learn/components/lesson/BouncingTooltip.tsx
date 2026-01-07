import { cn } from "@/lib/utils"

export const BouncingTooltip = () => (
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
