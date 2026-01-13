"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { assetsPath } from "@/constants"
import { useExitModal } from "@/stores/use-exit-modal-store"

export const ExitModal = () => {
	const router = useRouter()
	const [isClient, setIsClient] = useState(false)
	const { isOpen, closeModal } = useExitModal()

	useEffect(() => setIsClient(true), [])

	if (!isClient) return null

	const handleEndLessonButtonClick = () => {
		closeModal()
		router.push("/learn")
	}

	return (
		<Dialog open={isOpen} onOpenChange={closeModal}>
			<DialogContent className="max-w-md">
				<DialogHeader className="flex items-center justify-center">
					<div className="mb-5">
						<Image
							src={assetsPath.public.mascotSad}
							width={80}
							height={80}
							alt="sad mascot"
						/>
					</div>
					<DialogTitle className="text-2xl">
						Wait don't go!
					</DialogTitle>
					<DialogDescription className="text-base">
						You're about to leave the lesson. Are you sure?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="mb-4 flex flex-col gap-y-4">
					<Button
						variant="primary"
						className="w-full"
						size="lg"
						onClick={closeModal}
					>
						keep learning
					</Button>

					<Button
						variant="danger-outline"
						className="w-full"
						size="lg"
						onClick={handleEndLessonButtonClick}
					>
						end lesson
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
