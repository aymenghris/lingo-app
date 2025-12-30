import Image from "next/image"
import { Button } from "@/components/ui/button"
import { footerCourses } from "@/constants"

export const Footer = () => {
	return (
		<footer className="hidden w-full border-slate-200 border-t-2 p-2 lg:block">
			<div className="mx-auto flex h-full max-w-5xl items-center justify-evenly">
				{footerCourses.map((course) => (
					<Button
						key={course.code}
						size="lg"
						variant="default-outline"
					>
						<Image
							src={`/flags/${course.code}.svg`}
							alt={course.title}
							width={40}
							height={32}
							className="mr-4 rounded-md"
						/>
						{course.title}
					</Button>
				))}
			</div>
		</footer>
	)
}
