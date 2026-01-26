"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"

interface ModalWrapperProps {
	isOpen: boolean
	onOpenChange: (open: boolean) => void
	imageSrc: string
	title: string
	description: string

	primaryButton: ButtonConfig
	secondaryButton?: ButtonConfig
}

interface ButtonConfig {
	label: string
	onClick: () => void
	variant?: "primary" | "primary-outline" | "danger" | "danger-outline"
}

export const ModalWrapper = ({
	isOpen,
	onOpenChange,
	imageSrc,
	title,
	description,
	primaryButton,
	secondaryButton,
}: ModalWrapperProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-md">
				<DialogHeader className="flex items-center justify-center">
					<div className="mb-5">
						<Image
							src={imageSrc}
							width={80}
							height={80}
							alt={title}
						/>
					</div>
					<DialogTitle className="text-center text-2xl">
						{title}
					</DialogTitle>
					<DialogDescription className="text-center text-base">
						{description}
					</DialogDescription>
				</DialogHeader>

				<DialogFooter className="mb-4 flex flex-col gap-y-4">
					{primaryButton && (
						<Button
							variant={primaryButton.variant ?? "primary"}
							className="w-full"
							size="lg"
							onClick={primaryButton.onClick}
						>
							{primaryButton.label}
						</Button>
					)}

					{secondaryButton && (
						<Button
							variant={
								secondaryButton.variant ?? "primary-outline"
							}
							className="w-full"
							size="lg"
							onClick={secondaryButton.onClick}
						>
							{secondaryButton.label}
						</Button>
					)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
