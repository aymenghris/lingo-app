import {
	Create,
	NumberInput,
	required,
	SimpleForm,
	TextInput,
} from "react-admin"

export const CourseCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="title" validate={[required()]} label="Title" />
			<TextInput source="code" validate={[required()]} label="Code" />
			<NumberInput
				source="placement"
				validate={[required()]}
				label="Placement"
			/>
		</SimpleForm>
	</Create>
)
