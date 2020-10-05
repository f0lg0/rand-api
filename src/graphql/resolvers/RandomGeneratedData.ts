import { Query, Resolver, Arg } from "type-graphql";
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

@Resolver()
export class RandomString {
    @Query(() => String)
    randomString(@Arg("length") length: number) {
        let result = "";
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }

        return result;
    }
}
