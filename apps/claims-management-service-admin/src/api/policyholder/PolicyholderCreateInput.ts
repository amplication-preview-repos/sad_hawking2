import { InputJsonValue } from "../../types";
import { PolicyCreateNestedManyWithoutPolicyholdersInput } from "./PolicyCreateNestedManyWithoutPolicyholdersInput";

export type PolicyholderCreateInput = {
  contactInfo?: InputJsonValue;
  dob?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  policies?: PolicyCreateNestedManyWithoutPolicyholdersInput;
};
