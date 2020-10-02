import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: "Object representing Among Us Characters" })
export class AmongUsCharacter {
    @Field(() => String)
    id!: string;

    @Field(() => String)
    weight!: string;

    @Field(() => String)
    height!: string;
}
