import cors from "cors";
import { NextFunction, Response } from "express";
import { GraphQLServer, PubSub } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";
import decodeJWT from "./utils/decodeJWT";

class App {
  public app: GraphQLServer;
  public pubSub: any;
  constructor() {
    this.pubSub = new PubSub(); //데모용(메모리 leak이 있음)
    this.pubSub.ee.setMaxListeners(99);
    this.app = new GraphQLServer({
      schema,
      context: req => {
        // console.log(req);
        // console.log(req.connection.context.currentUser);
        const { connection: { context = null } = {} } = req;
        return {
          req: req.request,
          pubSub: this.pubSub,
          context: context
        };
      }
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
    this.app.express.use(this.jwt);
  };

  private jwt = async (
    req,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token = req.get("X-JWT");
    if (token) {
      const user = await decodeJWT(token);
      console.log(user);
      if (user) {
        req.user = user;
      } else {
        req.user = undefined;
      }
    }
    next();
  };
}

export default new App().app;
