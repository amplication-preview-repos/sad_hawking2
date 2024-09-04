/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PolicyWhereUniqueInput } from "./PolicyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PolicyUpdateInput } from "./PolicyUpdateInput";

@ArgsType()
class UpdatePolicyArgs {
  @ApiProperty({
    required: true,
    type: () => PolicyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PolicyWhereUniqueInput)
  @Field(() => PolicyWhereUniqueInput, { nullable: false })
  where!: PolicyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PolicyUpdateInput,
  })
  @ValidateNested()
  @Type(() => PolicyUpdateInput)
  @Field(() => PolicyUpdateInput, { nullable: false })
  data!: PolicyUpdateInput;
}

export { UpdatePolicyArgs as UpdatePolicyArgs };
