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

  public static async getInfectedLocations(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const result = await runQuery(
        locationModule.queries.getInfectedLocations.query
      );
      res.status(200).send({
        total: result.records.length,
        records: result.records,
      });
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async getLocations(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const result = await runQuery(locationModule.queries.getLocations.query);

      res.status(200).send({
        total: result.records.length,
        records: result.records,
      });
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
