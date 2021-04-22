import express from "express";
import path from "path";
import { modules } from "../modules/modules";

export class app {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.setUpBackEnd();
    this.setUpFrontkEnd();
  }

  public getApp(): express.Application {
    return this.app;
  }

  private config(): void {}

  private setUpBackEnd(): void {
    this.app.use(modules.dumpModule.baseUri, modules.dumpModule.router);
  }

  private setUpFrontkEnd(): void {
    this.app.use("/", (req, res) => {
      res.sendFile(path.resolve(`${__dirname}/../templates/index.html`));
    });
  }
}
