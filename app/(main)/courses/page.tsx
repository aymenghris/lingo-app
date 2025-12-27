import { CoursesList } from "@courses/CoursesList"
import { getCourses, getUserProgress } from "@database/queries"

const CoursesPage = async () => {
	const [coursesData, userProgressData] = await Promise.all([
		getCourses(),
		getUserProgress(),
	])

	return (
		<div className="mx-auto h-full max-w-228 px-3">
			<div className="font-bold text-2xl text-neutral-700 capitalize">
				languages courses
				<CoursesList
					courses={coursesData}
					activeCourseId={userProgressData?.activeCourseId}
				/>
			</div>
		</div>
	)
}

export default CoursesPage
