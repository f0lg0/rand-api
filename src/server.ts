import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { RequestHandler } from "express";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

// Miscellaneous
import { HelloWorldResolver } from "./graphql/resolvers/HelloWorldResolver";
import { AmongUsCharacterResolver } from "./graphql/resolvers/AmongUsCharacters";

// ASCII ART
import {
    DumbFace1,
    Anime1,
    Weird1,
} from "./graphql/resolvers/AsciiArtResolvers";

// Random Generated Data
import {
    RandomNumber01,
    RandomID,
    RandomString,
} from "./graphql/resolvers/RandomGeneratedData";

// Q&A
import { IsMy, WhatIs } from "./graphql/resolvers/QuestionsAnswers";

(async () => {
    const app = express();

    const HOST: string = process.env.HOST!;
    const PORT: string = process.env.PORT!;

    const home: RequestHandler = (_, res) => {
        res.json({
            message: "Please visit GraphQL endpoint",
            path: `http://${HOST}:${PORT}/graphql`,
        });
    };

    app.get("/", home);

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                HelloWorldResolver,
                AmongUsCharacterResolver,
                DumbFace1,
                Anime1,
                RandomNumber01,
                RandomID,
                Weird1,
                IsMy,
                WhatIs,
                RandomString,
            ],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app, cors: false });

    const notFoundHandler: RequestHandler = (_, res) => {
        res.status(404);
        res.json({
            error: 404,
            message: "Not found",
        });
    };

    app.use(notFoundHandler);

    app.listen(PORT, () => {
        console.log(
            `🚀 Server ready at http://${HOST}:${PORT}${apolloServer.graphqlPath}`
        );
    });
})();
