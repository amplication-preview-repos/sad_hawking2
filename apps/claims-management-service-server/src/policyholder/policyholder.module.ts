import { Module } from "@nestjs/common";
import { PolicyholderModuleBase } from "./base/policyholder.module.base";
import { PolicyholderService } from "./policyholder.service";
import { PolicyholderController } from "./policyholder.controller";
import { PolicyholderResolver } from "./policyholder.resolver";

@Module({
  imports: [PolicyholderModuleBase],
  controllers: [PolicyholderController],
  providers: [PolicyholderService, PolicyholderResolver],
  exports: [PolicyholderService],
})
export class PolicyholderModule {}
