import * as graphql from "@nestjs/graphql";
import { PolicyholderResolverBase } from "./base/policyholder.resolver.base";
import { Policyholder } from "./base/Policyholder";
import { PolicyholderService } from "./policyholder.service";

@graphql.Resolver(() => Policyholder)
export class PolicyholderResolver extends PolicyholderResolverBase {
  constructor(protected readonly service: PolicyholderService) {
    super(service);
  }
}
