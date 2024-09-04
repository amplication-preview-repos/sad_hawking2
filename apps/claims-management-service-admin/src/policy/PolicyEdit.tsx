import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ClaimTitle } from "../claim/ClaimTitle";
import { PolicyholderTitle } from "../policyholder/PolicyholderTitle";

export const PolicyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="claims"
          reference="Claim"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClaimTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="policyNumber" source="policyNumber" />
        <ReferenceInput
          source="policyholder.id"
          reference="Policyholder"
          label="Policyholder"
        >
          <SelectInput optionText={PolicyholderTitle} />
        </ReferenceInput>
        <NumberInput label="premiumAmount" source="premiumAmount" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
