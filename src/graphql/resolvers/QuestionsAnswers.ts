import { Query, Resolver } from "type-graphql";

@Resolver()
export class IsMy {
    @Query(() => String)
    isMyPCOn() {
        return "yes";
    }
}

@Resolver()
export class WhatIs {
    @Query(() => String)
    whatIsYourReligion() {
        return "no";
    }
}
