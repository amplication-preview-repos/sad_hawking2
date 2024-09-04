import { PolicyWhereUniqueInput } from "../policy/PolicyWhereUniqueInput";

export type ClaimUpdateInput = {
  amount?: number | null;
  claimNumber?: string | null;
  dateFiled?: Date | null;
  policy?: PolicyWhereUniqueInput | null;
  status?: "Option1" | null;
};
