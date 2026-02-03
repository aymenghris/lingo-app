import { users } from "@database/schemas"
import { eq } from "drizzle-orm"
import { db } from "@/database/drizzle"

type UserData = {
	id: string
	fullName: string
	email: string
	avatar: string
}

export const upsertUser = async (userData: UserData) => {
	await db.insert(users).values(userData).onConflictDoUpdate({
		target: users.id, // If this column causes a conflict (ID exists)...
		set: userData, // ...then update the row with these new values.
	})
}

export const deleteUser = async (id: string) => {
	await db.delete(users).where(eq(users.id, id))
}
