import dotenv from "dotenv";
dotenv.config(); // console.log(process.env);

import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOption from "./ormConfig";
import decodeJWT from "./utils/decodeJWT";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
const SUBSCRIPTION_ENDPOINT: string = "/subscription";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND,
  endpoint: GRAPHQL_ENDPOINT,
  subscriptions: {
    path: SUBSCRIPTION_ENDPOINT,
    onConnect: async connectionParams => {
      // console.log(connectionParams);
      const token = connectionParams["X-JWT"];
      if (token) {
        const user = await decodeJWT(token);
        if (user) {
          return {
            currentUser: user
          };
        }
      }
      throw new Error("No JWT. Can't subscribe");
    }
  }
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOption)
  .then(() => {
    app.start(appOptions, handleAppStart);
  })
  .catch(error => console.log(error));
