import { PolicyholderWhereInput } from "./PolicyholderWhereInput";
import { PolicyholderOrderByInput } from "./PolicyholderOrderByInput";

export type PolicyholderFindManyArgs = {
  where?: PolicyholderWhereInput;
  orderBy?: Array<PolicyholderOrderByInput>;
  skip?: number;
  take?: number;
};
