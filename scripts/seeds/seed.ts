import { coursesData } from "@/scripts/seeds/data/courses-data"
import { insertCourses } from "@/scripts/seeds/queries/insert-courses"

const seedDatabase = async () => {
	await insertCourses(coursesData)
}

seedDatabase()
	.then(() => {
		console.log("Database seeded successfully")
		process.exit(0)
	})
	.catch((error) => {
		console.error("Error seeding database:", error)
		process.exit(1)
	})
