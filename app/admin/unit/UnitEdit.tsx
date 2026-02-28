import {
	Edit,
	NumberInput,
	ReferenceField,
	required,
	SimpleForm,
	TextInput,
} from "react-admin"

export const UnitEdit = () => (
	<Edit>
		<SimpleForm>
			<NumberInput source="id" validate={[required()]} label="Id" />
			<TextInput source="title" validate={[required()]} label="Title" />
			<TextInput
				source="description"
				validate={[required()]}
				label="Description"
			/>
			<ReferenceField source="courseId" reference="courses" />
			<NumberInput
				source="placement"
				validate={[required()]}
				label="Placement"
			/>
		</SimpleForm>
	</Edit>
)
