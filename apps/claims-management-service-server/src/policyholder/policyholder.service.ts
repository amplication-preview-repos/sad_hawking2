import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PolicyholderServiceBase } from "./base/policyholder.service.base";

@Injectable()
export class PolicyholderService extends PolicyholderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
