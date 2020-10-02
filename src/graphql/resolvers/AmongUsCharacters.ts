import { AmongUsCharacter } from "../typeDefs/AmongUsCharacter";
import { Query, Resolver } from "type-graphql";

const colors: Array<string> = [
    "Red",
    "Lime",
    "Blue",
    "Green",
    "Pink",
    "Cyan",
    "Orange",
    "Brown",
    "Purple",
    "Yellow",
];

function craftData(color: string) {
    const auc = new AmongUsCharacter();

    auc.id = `${color.toUpperCase().substring(0, 3)}P0`;
    auc.height = "3'6 ft";
    auc.weight = "92 lbs";
    auc.color = color;
    auc.bloodType = color === "Lime" ? "AB-" : "O-";

    return auc;
}
@Resolver()
export class AmongUsCharacterResolver {
    @Query(() => [AmongUsCharacter])
    AmongUsCharacter() {
        const characters: Array<AmongUsCharacter> = [];

        for (let i = 0; i < colors.length; i++) {
            characters.push(craftData(colors[i]));
        }

        return characters;
    }
}
