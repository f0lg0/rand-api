import { Query } from "type-graphql";

export class HelloWorldResolver {
    @Query(() => String)
    hello() {
        return "Hello World";
    }
}
