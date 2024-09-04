import { Policyholder as TPolicyholder } from "../api/policyholder/Policyholder";

export const POLICYHOLDER_TITLE_FIELD = "firstName";

export const PolicyholderTitle = (record: TPolicyholder): string => {
  return record.firstName?.toString() || String(record.id);
};
