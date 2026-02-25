import { type NextRequest, NextResponse } from "next/server"
import { getIsAdmin } from "@/utils/clerk"

type HandlerOptions<T> = {
	resourceName: string
	fetchAll: () => Promise<T[]>
}

export const createListHandler = <T>({
	resourceName,
	fetchAll,
}: HandlerOptions<T>) => {
	return async (request: NextRequest) => {
		const isAdmin = await getIsAdmin()
		if (!isAdmin) {
			return NextResponse.json(
				"Access denied. Administrator privileges are required.",
				{ status: 403 },
			)
		}

		const { searchParams } = request.nextUrl

		/**
		 * 1. Parse React-Admin Parameters
		 *    React-Admin sends pagination params via query string: "?range=[0,9]"
		 *    If no range is provided, we default to the first 10 items.
		 */
		const rangeParam = searchParams.get("range")
		const range = rangeParam ? JSON.parse(rangeParam) : [0, 9]
		const [start, end] = range

		// 2. Fetch Data & Calculate Totals
		const allItems = await fetchAll()

		/**
		 * CRITICAL: React-Admin needs the TOTAL count of records in the DB
		 * to calculate how many pages to show in the UI.
		 */
		const total = allItems.length

		/**
		 *  3. Slice Data
		 *    Extract only the requested chunk.
		 *    Note: .slice() end index is exclusive, but the 'range' end is inclusive.
		 *    We add +1 to ensure the last item is included.
		 */
		const paginated = allItems.slice(start, end + 1)

		// 4. Return Response with Content-Range Header
		return NextResponse.json(paginated, {
			/**
			 * The 'ra-data-simple-rest' provider requires this header.
			 * Format: <resource> <start>-<end>/<total>
			 * Example: "courses 0-9/100"
			 */
			headers: {
				"Content-Range": `${resourceName} ${start}-${end}/${total}`,
			},
		})
	}
}
