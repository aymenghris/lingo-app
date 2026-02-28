import { Datagrid, List, ReferenceField, TextField } from "react-admin"

export const LessonList = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="title" />
			<ReferenceField source="unitId" reference="units" />
			<TextField source="placement" />
		</Datagrid>
	</List>
)
