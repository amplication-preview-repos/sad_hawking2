import { ClaimListRelationFilter } from "../claim/ClaimListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PolicyholderWhereUniqueInput } from "../policyholder/PolicyholderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PolicyWhereInput = {
  claims?: ClaimListRelationFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  policyNumber?: StringNullableFilter;
  policyholder?: PolicyholderWhereUniqueInput;
  premiumAmount?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
};
