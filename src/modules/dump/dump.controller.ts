import { Request, Response } from "express";
import { DBDRIVER } from "../../bin/adapter";
import { runQuery } from "../../utils/query";
import { dumpModule } from "./dump.module";

export class DumpController {
  public static async dumpData(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(
        dumpModule.queries.loadLocations.query,
        dumpModule.queries.loadLocations.params
      );

      await runQuery(
        dumpModule.queries.loadPeople.query,
        dumpModule.queries.loadPeople.params
      );

      await runQuery(dumpModule.queries.relatePeopleWithLocation.query);

      await runQuery(dumpModule.queries.relatePeoplewithPeople.query);

      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async deleteDump(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(dumpModule.queries.deleteRelationRelated.query);
      await runQuery(dumpModule.queries.deleteRelationVisited.query);
      await runQuery(dumpModule.queries.deleteNodes.query);

      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
