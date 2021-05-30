import express from "express";
import { modules } from "../modules/modules";
import cors from "cors";
import { CONSTANTS } from "./constants";
export class app {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.setUpBackEnd();
  }

  public getApp(): express.Application {
    return this.app;
  }

  private config(): void {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      cors({
        origin: function (origin, callback) {
          if (!origin) return callback(null, true);
          if (CONSTANTS.ORIGINS.indexOf(origin) === -1) {
            return callback(
              new Error(
                "The CORS policy for this origin doesn't allow access from the particular origin."
              ),
              false
            );
          }
          return callback(null, true);
        },
      })
    );
  }

  private setUpBackEnd(): void {
    this.app.use(modules.dumpModule.baseUri, modules.dumpModule.router);
    this.app.use(modules.personModule.baseUri, modules.personModule.router);
    this.app.use(modules.locationModule.baseUri, modules.locationModule.router);
    this.app.use(
      modules.analyticsModule.baseUri,
      modules.analyticsModule.router
    );
    this.app.get("/", (req, res) => {
      res.send("hello docker!");
    });
  }
}
