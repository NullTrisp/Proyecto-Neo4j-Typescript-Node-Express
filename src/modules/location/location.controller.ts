import { Request, Response } from "express";
import { runQuery } from "../../utils/query";
import { locationModule } from "./location.module";

export class LocationController {
  public static async infectLocation(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      runQuery(locationModule.queries.infectLocation.query);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
