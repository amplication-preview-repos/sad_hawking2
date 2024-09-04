import { Claim } from "../claim/Claim";
import { Policyholder } from "../policyholder/Policyholder";

export type Policy = {
  claims?: Array<Claim>;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  policyNumber: string | null;
  policyholder?: Policyholder | null;
  premiumAmount: number | null;
  startDate: Date | null;
  updatedAt: Date;
};
