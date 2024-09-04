import { SortOrder } from "../../util/SortOrder";

export type ClaimOrderByInput = {
  amount?: SortOrder;
  claimNumber?: SortOrder;
  createdAt?: SortOrder;
  dateFiled?: SortOrder;
  id?: SortOrder;
  policyId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
