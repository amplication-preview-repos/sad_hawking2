import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PolicyWhereUniqueInput } from "../policy/PolicyWhereUniqueInput";

export type ClaimWhereInput = {
  amount?: FloatNullableFilter;
  claimNumber?: StringNullableFilter;
  dateFiled?: DateTimeNullableFilter;
  id?: StringFilter;
  policy?: PolicyWhereUniqueInput;
  status?: "Option1";
};
