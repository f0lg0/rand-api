import { Query, Resolver } from "type-graphql";

@Resolver()
export class isMy {
    @Query(() => String)
    isMyPCOn() {
        return "yes";
    }
}
