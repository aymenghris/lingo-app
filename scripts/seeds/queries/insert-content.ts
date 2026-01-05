import * as schema from "@database/schemas"
import { db } from "@/database/drizzle"
import type {
	Challenge,
	ChallengeOptions,
	Lesson,
	Unit,
} from "@/scripts/seeds/utils/types"

export const insertLanguageContent = async (
	units?: Unit[],
	lessons?: Lesson[],
	challenges?: Challenge[],
	challengeOptions?: ChallengeOptions[],
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
				id: unit.id,
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
				id: lesson.id,
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
				id: challenge.id,
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

const insertChallengeOptions = async (challengeOptions: ChallengeOptions[]) => {
	try {
		await db.insert(schema.challengeOptions).values(
			challengeOptions.map((option) => ({
				id: option.id,
				challengeId: option.challengeId,
				isCorrect: option.isCorrect,
				textContent: option.textContent,
				imageSrc: option.imageSrc,
				audioSrc: option.audioSrc,
			})),
		)
		console.log("Challenge options inserted successfully")
	} catch (error) {
		console.error("Failed to insert challenge options, Error:", error)
	}
}
