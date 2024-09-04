import { Policy } from "../policy/Policy";

export type Claim = {
  amount: number | null;
  claimNumber: string | null;
  createdAt: Date;
  dateFiled: Date | null;
  id: string;
  policy?: Policy | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
