import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { getIsAdmin } from "@/utils/clerk"

const isPublicRoute = createRouteMatcher(["/", "/api/webhooks/(.*)"])
const isAdminRoute = createRouteMatcher(["/admin(.*)"])

export default clerkMiddleware(async (auth, req) => {
	if (isAdminRoute(req)) {
		const isAdmin = await getIsAdmin()

		if (!isAdmin) {
			const url = new URL("/", req.url)
			return NextResponse.redirect(url)
		}
	}

	if (!isPublicRoute(req)) {
		await auth.protect()
	}
})

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
}
