import { Policy as TPolicy } from "../api/policy/Policy";

export const POLICY_TITLE_FIELD = "policyNumber";

export const PolicyTitle = (record: TPolicy): string => {
  return record.policyNumber?.toString() || String(record.id);
};
