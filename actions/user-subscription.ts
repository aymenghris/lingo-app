"use server"

import { getUserSubscription } from "@database//queries"
import { stripe } from "@/lib/stripe"
import { absoluteUrl, convertToSubcurrency } from "@/lib/utils"
import { getFullUser } from "@/utils/clerk"

const returnUrl = absoluteUrl("/shop")
const AMOUNT_IN_DOLLARS = 1.99

export const createStripeUrl = async () => {
	const { userId, user } = await getFullUser()
	const userSubscription = await getUserSubscription()

	// EXISTING CUSTOMER → Send to Billing Portal
	if (userSubscription?.stripeCustomerId) {
		const stripeSession = await stripe.billingPortal.sessions.create({
			customer: userSubscription.stripeCustomerId,
			return_url: returnUrl,
		})

		return { data: stripeSession.url }
	}

	// NEW CUSTOMER → Send to Checkout
	const stripeSession = await stripe.checkout.sessions.create({
		mode: "subscription",
		payment_method_types: ["card"],
		customer_email: user.emailAddresses[0].emailAddress,
		line_items: [
			{
				price: process.env.STRIPE_PRICE_ID as string,
				price_data: {
					currency: "usd",
					product_data: {
						name: "Lingo Pro",
						description: "Unlimited Hearts",
					},
					unit_amount: convertToSubcurrency(AMOUNT_IN_DOLLARS),
					recurring: { interval: "month" },
				},
				quantity: 1,
			},
		],
		metadata: {
			userId, // Important! Used in webhook to link payment to the user
		},
		success_url: returnUrl,
		cancel_url: returnUrl,
	})

	return { data: stripeSession.url }
}
