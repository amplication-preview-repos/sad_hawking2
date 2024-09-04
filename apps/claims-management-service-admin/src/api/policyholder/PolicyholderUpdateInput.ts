import { InputJsonValue } from "../../types";
import { PolicyUpdateManyWithoutPolicyholdersInput } from "./PolicyUpdateManyWithoutPolicyholdersInput";

export type PolicyholderUpdateInput = {
  contactInfo?: InputJsonValue;
  dob?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  policies?: PolicyUpdateManyWithoutPolicyholdersInput;
};
