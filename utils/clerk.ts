import { auth, currentUser } from "@clerk/nextjs/server"

export const getUserId = async () => {
	const { userId } = await auth()

	if (!userId) {
		throw new Error("Unauthorized User")
	}

	return userId
}

export const getFullUser = async () => {
	const { userId } = await auth()
	const user = await currentUser()

	if (!userId || !user) {
		throw new Error("Unauthorized User")
	}

	return { userId, user }
}
