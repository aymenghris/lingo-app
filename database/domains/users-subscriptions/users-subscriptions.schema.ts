import { users } from "@database/schemas"
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const usersSubscriptions = pgTable("users_subscriptions", {
	id: serial("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	stripeCustomerId: text("stripe_customer_id").notNull().unique(),
	stripeSubscriptionId: text("stripe_subscription_id").notNull().unique(),
	stripePriceId: text("stripe_price_id").notNull(),
	stripeCurrentPeriodEnd: timestamp("stripe_current_period_end").notNull(),
})
