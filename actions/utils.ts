import { revalidatePath } from "next/cache"

export const PATHS_TO_REVALIDATE = [
	"/learn",
	"/lesson",
	"/quests",
	"/leaderboard",
] as const

export const revalidatePaths = (paths: readonly string[]) => {
	for (const path of paths) {
		revalidatePath(path)
	}
}
