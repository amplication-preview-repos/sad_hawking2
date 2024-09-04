import { ClaimCreateNestedManyWithoutPoliciesInput } from "./ClaimCreateNestedManyWithoutPoliciesInput";
import { PolicyholderWhereUniqueInput } from "../policyholder/PolicyholderWhereUniqueInput";

export type PolicyCreateInput = {
  claims?: ClaimCreateNestedManyWithoutPoliciesInput;
  endDate?: Date | null;
  policyNumber?: string | null;
  policyholder?: PolicyholderWhereUniqueInput | null;
  premiumAmount?: number | null;
  startDate?: Date | null;
};
