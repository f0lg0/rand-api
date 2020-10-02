import { AmongUsCharacter } from "../typeDefs/AmongUsCharacter";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class AmongUsCharacterResolver {
    @Query(() => AmongUsCharacter)
    AmongUsCharacter() {
        return {
            id: "test",
            weight: "test",
            height: "test",
        };
    }
}
