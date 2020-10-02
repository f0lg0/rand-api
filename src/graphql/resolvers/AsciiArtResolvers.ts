import { Query, Resolver } from "type-graphql";

import dumbFace1 from "../../archive/asciiart/dumb.face.1";
import animeGirls1 from "../../archive/asciiart/anime.girls.1";
import weird1 from "../../archive/asciiart/weird.1";

@Resolver()
export class DumbFace1 {
    @Query(() => String)
    DumbFace1() {
        return dumbFace1;
    }
}

@Resolver()
export class Anime1 {
    @Query(() => String)
    AnimeGirls1() {
        return animeGirls1;
    }
}

@Resolver()
export class Weird1 {
    @Query(() => String)
    WeirdASCII1() {
        return weird1;
    }
}
