import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { POLICY_TITLE_FIELD } from "./PolicyTitle";
import { POLICYHOLDER_TITLE_FIELD } from "../policyholder/PolicyholderTitle";

export const PolicyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="policyNumber" source="policyNumber" />
        <ReferenceField
          label="Policyholder"
          source="policyholder.id"
          reference="Policyholder"
        >
          <TextField source={POLICYHOLDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="premiumAmount" source="premiumAmount" />
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Claim" target="policyId" label="Claims">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <TextField label="claimNumber" source="claimNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateFiled" source="dateFiled" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Policy"
              source="policy.id"
              reference="Policy"
            >
              <TextField source={POLICY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
