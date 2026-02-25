import { CourseCreate, CourseList } from "@admin/course"
import simpleRestProvider from "ra-data-simple-rest"
import { Admin, Resource } from "react-admin"

const dataProvider = simpleRestProvider("/api")

const AdminApp = () => (
	<Admin dataProvider={dataProvider}>
		<Resource
			name="courses"
			list={CourseList}
			create={CourseCreate}
			recordRepresentation="title"
		/>
	</Admin>
)

export default AdminApp
