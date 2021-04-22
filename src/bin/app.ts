import express from "express";
import path from "path";

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

  private setUpBackEnd(): void {}

  private setUpFrontkEnd(): void {
    this.app.use("/", (req, res) => {
      res.sendFile(path.resolve(`${__dirname}/../templates/index.html`));
    });
  }
}
