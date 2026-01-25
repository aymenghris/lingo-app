"use client"

import { FinishScreenLayout } from "@lesson/components/finish-screen/FinishScreenLayout"
import { ResultCard } from "@lesson/components/finish-screen/ResultCard"
import { Footer } from "@lesson/components/footer/Footer"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { processLessonCompletion } from "@/actions/process-lesson-completion"
import { assetsPath } from "@/constants"
import { useSyncedTransition } from "@/hooks/useSyncedTransition"
import { useQuizSessionStoreSelector } from "@/stores/use-quiz-session-store"
import { useUserStoreSelector } from "@/stores/use-user-store"

const XP_PER_CHALLENGE = 10

export const FinishScreen = () => {
	const { hearts } = useUserStoreSelector()
	const { challenges, quizMode } = useQuizSessionStoreSelector()

	const router = useRouter()
	const [_, startTransition] = useSyncedTransition()

	const handleFinish = () => {
		if (quizMode === "practice") {
			// No server action needed → navigate immediately
			router.push("/learn")
			return
		}

		startTransition(() => {
			processLessonCompletion()
				.then(() => {
					router.push("/learn")
				})
				.catch(() =>
					toast.error("Something went wrong. Please try again."),
				)
		})
	}

	return (
		<FinishScreenLayout footer={<Footer onCheck={handleFinish} />}>
			<Image
				src={assetsPath.public.confettiBall}
				alt="finsih"
				width={100}
				height={100}
				className="size-12.5 lg:size-25"
			/>

			<h1 className="font-bold text-xl capitalize lg:text-3xl">
				great job! <br /> you've completed the lesson
			</h1>

			<div className="flex items-center justify-center gap-x-4 w-full">
				<ResultCard
					variant="points"
					value={challenges.length * XP_PER_CHALLENGE}
				/>

				<ResultCard variant="hearts" value={hearts} />
			</div>
		</FinishScreenLayout>
	)
}
