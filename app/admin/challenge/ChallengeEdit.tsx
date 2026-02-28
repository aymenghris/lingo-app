import {
	Edit,
	NumberInput,
	ReferenceField,
	required,
	SelectInput,
	SimpleForm,
	TextInput,
} from "react-admin"

export const ChallengeEdit = () => (
	<Edit>
		<SimpleForm>
			<NumberInput source="id" validate={[required()]} label="Id" />
			<ReferenceField source="lessonId" reference="lessons" />
			<SelectInput
				source="type"
				validate={[required()]}
				label="Type"
				choices={[
					{ id: "select", name: "Select" },
					{ id: "assist", name: "Assist" },
				]}
			/>
			<TextInput source="question" validate={[required()]} label="Question" />
			<NumberInput
				source="placement"
				validate={[required()]}
				label="Placement"
			/>
		</SimpleForm>
	</Edit>
)
