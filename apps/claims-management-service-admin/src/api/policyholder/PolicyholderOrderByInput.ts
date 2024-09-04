import { SortOrder } from "../../util/SortOrder";

export type PolicyholderOrderByInput = {
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  dob?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
