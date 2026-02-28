import { Datagrid, List, ReferenceField, TextField } from "react-admin"

export const ChallengeList = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<ReferenceField source="lessonId" reference="lessons" />
			<TextField source="type" />
			<TextField source="question" />
			<TextField source="placement" />
		</Datagrid>
	</List>
)
