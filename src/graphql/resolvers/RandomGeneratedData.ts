import { Query, Resolver } from "type-graphql";
import { v4 as uuid } from "uuid";

@Resolver()
export class RandomNumber01 {
    @Query(() => Number)
    randomNumber01() {
        return Math.random();
    }
}

@Resolver()
export class RandomID {
    @Query(() => String)
    randomID() {
        return uuid();
    }
}
