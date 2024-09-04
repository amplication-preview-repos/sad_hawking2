import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POLICYHOLDER_TITLE_FIELD } from "../policyholder/PolicyholderTitle";

export const PolicyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Policies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
