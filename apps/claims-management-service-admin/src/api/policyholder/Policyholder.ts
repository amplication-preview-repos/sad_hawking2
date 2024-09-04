import { JsonValue } from "type-fest";
import { Policy } from "../policy/Policy";

export type Policyholder = {
  contactInfo: JsonValue;
  createdAt: Date;
  dob: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  policies?: Array<Policy>;
  updatedAt: Date;
};
