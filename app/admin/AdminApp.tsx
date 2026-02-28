import { CourseCreate, CourseEdit, CourseList } from "@admin/course"
import { UnitCreate, UnitEdit, UnitList } from "@admin/unit"
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
	</Admin>
)

export default AdminApp
