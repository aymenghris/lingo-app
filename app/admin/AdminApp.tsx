import { CourseCreate, CourseEdit, CourseList } from "@admin/course"
import { UnitCreate, UnitEdit, UnitList } from "@admin/unit"
import { LessonCreate, LessonEdit, LessonList } from "@admin/lesson"
import { ChallengeCreate, ChallengeEdit, ChallengeList } from "@admin/challenge"
import simpleRestProvider from "ra-data-simple-rest"
import { Admin, Resource } from "react-admin"

const dataProvider = simpleRestProvider("/api")

const AdminApp = () => (
	<Admin dataProvider={dataProvider}>
		<Resource
			name="courses"
			list={CourseList}
			create={CourseCreate}
			edit={CourseEdit}
			recordRepresentation="title"
		/>
		<Resource
			name="units"
			list={UnitList}
			create={UnitCreate}
			edit={UnitEdit}
			recordRepresentation="title"
		/>
		<Resource
			name="lessons"
			list={LessonList}
			create={LessonCreate}
			edit={LessonEdit}
			recordRepresentation="title"
		/>
		<Resource
			name="challenges"
			list={ChallengeList}
			create={ChallengeCreate}
			edit={ChallengeEdit}
			recordRepresentation="question"
		/>
	</Admin>
)

export default AdminApp
