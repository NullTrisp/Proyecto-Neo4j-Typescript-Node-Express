import { DBDRIVER } from "../../bin/adapter";
import { Request, Response } from "express";
import { dumpModule } from "./dump.module";

export class DumpController {
  public static async dumpData(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const session = DBDRIVER.session();
      await session.run(dumpModule.queries.loadLocations.query, {
        location: dumpModule.queries.loadLocations.file,
      });
      await session.run(dumpModule.queries.loadPeople.query, {
        location: dumpModule.queries.loadPeople.file,
      });
      await session.run(dumpModule.queries.relatePeopleWithLocation.query);
      await session.run(dumpModule.queries.relatePeoplewithPeople.query);
      session.close();
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
      const session = DBDRIVER.session();
      await session.run(dumpModule.queries.deleteRelationRelated.query);
      await session.run(dumpModule.queries.deleteRelationVisited.query);
      await session.run(dumpModule.queries.deleteNodes.query);
      session.close();
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
