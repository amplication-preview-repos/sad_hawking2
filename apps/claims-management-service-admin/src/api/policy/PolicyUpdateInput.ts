import { ClaimUpdateManyWithoutPoliciesInput } from "./ClaimUpdateManyWithoutPoliciesInput";
import { PolicyholderWhereUniqueInput } from "../policyholder/PolicyholderWhereUniqueInput";

export type PolicyUpdateInput = {
  claims?: ClaimUpdateManyWithoutPoliciesInput;
  endDate?: Date | null;
  policyNumber?: string | null;
  policyholder?: PolicyholderWhereUniqueInput | null;
  premiumAmount?: number | null;
  startDate?: Date | null;
};
