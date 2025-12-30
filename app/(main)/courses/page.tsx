import { CoursesList } from "@courses/CoursesList"
import { getCourses, getUserActiveCourseId } from "@database/queries"

const CoursesPage = async () => {
	const [coursesData, userActiveCourseId] = await Promise.all([
		getCourses(),
		getUserActiveCourseId(),
	])

	return (
		<div className="mx-auto h-full max-w-228 px-3">
			<div className="font-bold text-2xl text-neutral-700 capitalize">
				languages courses
				<CoursesList
					courses={coursesData}
					activeCourseId={userActiveCourseId}
				/>
			</div>
		</div>
	)
}

export default CoursesPage
