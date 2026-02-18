import {
	getUserActiveCourse,
	getUserStats,
	getUserSubscription,
} from "@database/queries"
import { redirect } from "next/navigation"

export const getAuthenticatedUserData = async () => {
	const [userActiveCourse, userSubscription] = await Promise.all([
		getUserActiveCourse(),
		getUserSubscription(),
	])

	if (!userActiveCourse) {
		redirect("/courses")
	}

	const { hearts, points } = await getUserStats()
	const isSubscribed = !!userSubscription?.isActive

	return {
		userActiveCourse,
		userSubscription,
		hearts,
		points,
		isSubscribed,
	}
}

export const getUserSubscriptionData = async () => {
	const userSubscription = await getUserSubscription()
	const isSubscribed = !!userSubscription?.isActive

	return {
		userSubscription,
		isSubscribed,
	}
}
