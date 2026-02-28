import {
	BooleanInput,
	Create,
	NumberInput,
	ReferenceInput,
	required,
	SimpleForm,
	TextInput,
} from "react-admin"

export const ChallengeOptionCreate = () => (
	<Create>
		<SimpleForm>
			<ReferenceInput source="challengeId" reference="challenges" />
			<BooleanInput source="isCorrect" label="Is Correct" />
			<TextInput
				source="textContent"
				validate={[required()]}
				label="Text Content"
			/>
			<TextInput source="imageSrc" label="Image Src" />
			<TextInput source="audioSrc" label="Audio Src" />
			<NumberInput
				source="placement"
				validate={[required()]}
				label="Placement"
			/>
		</SimpleForm>
	</Create>
)
