import { Request, Response } from "express";
import { runQuery } from "../../utils/query";
import { dumpModule } from "./dump.module";

export class DumpController {
  public static async dumpData(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(dumpModule.queries.loadLocations);

      await runQuery(dumpModule.queries.loadPeople);

      await runQuery(dumpModule.queries.relatePeoplewithPeople);

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
      await runQuery(dumpModule.queries.deleteRelationRelated);
      await runQuery(dumpModule.queries.deleteRelationVisited);
      await runQuery(dumpModule.queries.deleteNodes);

      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
