import {
	Create,
	NumberInput,
	ReferenceInput,
	required,
	SimpleForm,
	TextInput,
} from "react-admin"

export const LessonCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="title" validate={[required()]} label="Title" />
			<ReferenceInput source="unitId" reference="units" />
			<NumberInput
				source="placement"
				validate={[required()]}
				label="Placement"
			/>
		</SimpleForm>
	</Create>
)
