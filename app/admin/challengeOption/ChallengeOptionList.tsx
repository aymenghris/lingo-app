import {
	BooleanField,
	Datagrid,
	List,
	ReferenceField,
	TextField,
} from "react-admin"

export const ChallengeOptionList = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<ReferenceField source="challengeId" reference="challenges" />
			<BooleanField source="isCorrect" label="Is Correct" />
			<TextField source="textContent" label="Text Content" />
			<TextField source="imageSrc" label="Image Src" />
			<TextField source="audioSrc" label="Audio Src" />
			<TextField source="placement" />
		</Datagrid>
	</List>
)
