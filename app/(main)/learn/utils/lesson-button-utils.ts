export const determineLessonIndex = (
	lessonPlacement: number,
	totalLessons: number,
) => {
	if (lessonPlacement === 1) {
		return "first"
	}

	if (lessonPlacement === totalLessons) {
		return "last"
	}

	return "middle"
}
