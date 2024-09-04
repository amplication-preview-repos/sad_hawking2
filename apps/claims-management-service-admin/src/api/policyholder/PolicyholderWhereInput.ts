import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PolicyListRelationFilter } from "../policy/PolicyListRelationFilter";

export type PolicyholderWhereInput = {
  contactInfo?: JsonFilter;
  dob?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  policies?: PolicyListRelationFilter;
};
