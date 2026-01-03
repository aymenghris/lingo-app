const getCycleDirection = (
	unitPlacement: number,
	lessonPlacement: number,
	cycleLength: number,
): number => {
	/*
	 * Each course begins with the first unit directed to the left.
	 * alternating directions for later units to form a zigzag pattern.
	 * For example:
	 *  Unit 1: left
	 *  Unit 2: right
	 *  Unit 3: left
	 *  Unit 4: right
	 * Odd-numbered units are left-directed, while even-numbered units are right-directed.
	 */
	const baseFactor = unitPlacement % 2 === 0 ? 1 : -1

	/*
	 * Calculate the current cycle. If a unit contains multiple cycles
	 * the cycle is determined by dividing the lesson order by the cycle length.
	 * For example:
	 *  Lesson order: 3, cycle length: 4 → Math.floor(3 / 4) = 0 (Cycle 0)
	 *  Lesson order: 4, cycle length: 4 → Math.floor(4 / 4) = 1 (Cycle 1)
	 */
	const cycle = Math.floor(lessonPlacement / cycleLength)

	/*
	 * The direction sequence follows the same zigzag pattern as the units
	 * Since the first cycle is zero (even), all even cycles will follow the base direction (left or right based on the unit).
	 * while odd cycles will invert the direction. Unlike units, which always start with left
	 */
	return cycle % 2 === 0 ? baseFactor : -baseFactor
}

export const calculateLessonPosition = (
	unitPlacement: number,
	lessonPlacement: number,
) => {
	const cycleLength = 4 //  Buttons number in a cycle
	const cycleIndex = (lessonPlacement - 1) % cycleLength
	const factor = getCycleDirection(
		unitPlacement,
		lessonPlacement,
		cycleLength,
	)

	// Position offsets for each cycle step, right direction by default
	const offset = [0, 45, 70, 45]

	// Adjust position based on direction, factor is either 1 (right direction) or -1 (left direction)
	return offset[cycleIndex] * factor
}
