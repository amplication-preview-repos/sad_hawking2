import { SortOrder } from "../../util/SortOrder";

export type PolicyOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  policyNumber?: SortOrder;
  policyholderId?: SortOrder;
  premiumAmount?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
