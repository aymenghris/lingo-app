import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	cn(
		"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
		"font-bold text-sm uppercase tracking-wide",
		"rounded-xl outline-none transition-all",
		"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
		"disabled:pointer-events-none disabled:opacity-50",
		"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
		"dark:aria-invalid:ring-destructive/40",
		"[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	),
	{
		variants: {
			variant: {
				default: cn(
					"text-slate-500",
					"border-2 border-slate-200 border-b-4 bg-white",
					"hover:bg-slate-100 active:border-b-2",
				),
				"default-outline": cn(
					"text-slate-500",
					"bg-transparent",
					"hover:bg-slate-50",
				),
				primary: cn(
					"text-primary-foreground",
					"border-sky-600 border-b-4 bg-sky-500",
					"hover:bg-sky-500/90 active:border-b-0",
				),
				"primary-outline": cn(
					"text-sky-500",
					"bg-white",
					"hover:bg-sky-50",
				),
				"primary-soft": cn(
					"text-sky-500",
					"border-2 border-sky-500 bg-sky-500/15",
					"hover:bg-sky-500/20",
				),
				secondary: cn(
					"text-primary-foreground",
					"border-green-600 border-b-4 bg-green-500",
					"hover:bg-green-500/90 active:border-b-0",
				),
				"secondary-outline": cn(
					"text-green-500",
					"bg-white",
					"hover:bg-green-50",
				),
				danger: cn(
					"text-primary-foreground",
					"border-rose-600 border-b-4 bg-rose-500",
					"hover:bg-rose-500/90 active:border-b-0",
				),
				"danger-outline": cn(
					"text-rose-500",
					"bg-white",
					"hover:bg-rose-50",
				),
				premium: cn(
					"text-primary-foreground",
					"border-indigo-600 border-b-4 bg-indigo-500",
					"hover:bg-indigo-500/90 active:border-b-0",
				),
				"premium-outline": cn(
					"text-indigo-500",
					"bg-white",
					"hover:bg-indigo-50",
				),
			},
			size: {
				default: "h-11 px-4 py-2 has-[>svg]:px-3",
				sm: "h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-12 px-8 has-[>svg]:px-4",
				icon: "size-10",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
				rounded: "rounded-full",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
)

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
