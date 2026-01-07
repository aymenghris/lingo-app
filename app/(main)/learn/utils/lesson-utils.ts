export const determineLessonIndex = (
	placement: number,
	totalLessons: number,
) => {
	if (placement === 1) {
		return "first"
	}

	if (placement === totalLessons) {
		return "last"
	}

	return "middle"
}
