import { CoursesList } from "@/app/(main)/courses/CoursesList"
import { getCourses } from "@/database/queries"

const CoursesPage = async () => {
	const coursesData = await getCourses()

	return (
		<div className="mx-auto h-full max-w-228 px-3">
			<div className="font-bold text-2xl text-neutral-700 capitalize">
				languages courses
				<CoursesList courses={coursesData} activeCourseId={3} />
			</div>
		</div>
	)
}

export default CoursesPage
