import { Edit, NumberInput, required, SimpleForm, TextInput } from "react-admin"

export const CourseEdit = () => (
	<Edit>
		<SimpleForm>
			<TextInput source="id" validate={[required()]} label="Id" />
			<TextInput source="title" validate={[required()]} label="Title" />
			<TextInput source="code" validate={[required()]} label="Code" />
			<NumberInput
				source="placement"
				validate={[required()]}
				label="Placement"
			/>
		</SimpleForm>
	</Edit>
)
