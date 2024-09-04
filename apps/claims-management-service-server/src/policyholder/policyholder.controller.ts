import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PolicyholderService } from "./policyholder.service";
import { PolicyholderControllerBase } from "./base/policyholder.controller.base";

@swagger.ApiTags("policyholders")
@common.Controller("policyholders")
export class PolicyholderController extends PolicyholderControllerBase {
  constructor(protected readonly service: PolicyholderService) {
    super(service);
  }
}
