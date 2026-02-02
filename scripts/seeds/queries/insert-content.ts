import * as schema from "@database/schemas"
import type { Challenge, ChallengeOption, Lesson, Unit } from "@seeds/types"
import { db } from "@/database/drizzle"

export const insertLanguageContent = async (
	units?: Unit[],
	lessons?: Lesson[],
	challenges?: Challenge[],
	challengeOptions?: ChallengeOption[],
) => {
	if (units) await insertUnits(units)
	if (lessons) await insertLessons(lessons)
	if (challenges) await insertChallenges(challenges)
	if (challengeOptions) await insertChallengeOptions(challengeOptions)
}

const insertUnits = async (units: Unit[]) => {
	try {
		await db.insert(schema.units).values(
			units.map((unit) => ({
				title: unit.title,
				description: unit.description,
				courseId: unit.courseId,
				placement: unit.placement,
			})),
		)
		console.log("Units inserted successfully")
	} catch (error) {
		console.error("Failed to insert units. Error:", error)
	}
}

const insertLessons = async (lessons: Lesson[]) => {
	try {
		await db.insert(schema.lessons).values(
			lessons.map((lesson) => ({
				title: lesson.title,
				unitId: lesson.unitId,
				placement: lesson.placement,
			})),
		)
		console.log("Lessons inserted successfully")
	} catch (error) {
		console.error("Failed to insert lessons, Error:", error)
	}
}

const insertChallenges = async (challenges: Challenge[]) => {
	try {
		await db.insert(schema.challenges).values(
			challenges.map((challenge) => ({
				lessonId: challenge.lessonId,
				type: challenge.type,
				question: challenge.question,
				placement: challenge.placement,
			})),
		)
		console.log("Challenges inserted successfully")
	} catch (error) {
		console.error("Failed to insert challenges. Error:", error)
	}
}

const insertChallengeOptions = async (challengeOptions: ChallengeOption[]) => {
	try {
		await db.insert(schema.challengeOptions).values(
			challengeOptions.map((option) => ({
				challengeId: option.challengeId,
				isCorrect: option.isCorrect,
				textContent: option.textContent,
				imageSrc: option.imageSrc,
				audioSrc: option.audioSrc,
				placement: option.placement,
			})),
		)
		console.log("Challenge options inserted successfully")
	} catch (error) {
		console.error("Failed to insert challenge options, Error:", error)
	}
}
