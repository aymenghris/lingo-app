import {
	Edit,
	NumberInput,
	ReferenceField,
	required,
	SimpleForm,
	TextInput,
} from "react-admin"

export const LessonEdit = () => (
	<Edit>
		<SimpleForm>
			<NumberInput source="id" validate={[required()]} label="Id" />
			<TextInput source="title" validate={[required()]} label="Title" />
			<ReferenceField source="unitId" reference="units" />
			<NumberInput
				source="placement"
				validate={[required()]}
				label="Placement"
			/>
		</SimpleForm>
	</Edit>
)
