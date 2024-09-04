import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POLICY_TITLE_FIELD } from "../policy/PolicyTitle";

export const ClaimList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Claims"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
