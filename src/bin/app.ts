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
    this.app.use(express.json());
    this.app.use(cors({ origin: CONSTANTS.ORIGIN }));
  }

  private setUpBackEnd(): void {
    this.app.use(modules.dumpModule.baseUri, modules.dumpModule.router);
    this.app.use(modules.personModule.baseUri, modules.personModule.router);
    this.app.use(modules.locationModule.baseUri, modules.locationModule.router);
  }
}
