import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { POLICY_TITLE_FIELD } from "../policy/PolicyTitle";

export const ClaimShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="claimNumber" source="claimNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateFiled" source="dateFiled" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Policy" source="policy.id" reference="Policy">
          <TextField source={POLICY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
