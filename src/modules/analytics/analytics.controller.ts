import { Request, Response } from "express";
import { runQuery } from "../../utils/query";
import { analyticsModule } from "./analytics.module";
import neo4j from "neo4j-driver";

export class AnalyticsController {
  public static async createAnalytics(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ) {
    try {
      analyticsModule.queries.createAnalytics.params = {
        day: neo4j.int(req.body.day),
        infected_locations_num: neo4j.int(req.body.infected_locations_num),
        infected_locations: req.body.infected_locations,
        infected_people_num: neo4j.int(req.body.infected_people_num),
        infected_people: req.body.infected_people,
      };
      await runQuery(analyticsModule.queries.createAnalytics);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async getAnalytics(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ) {
    try {
      const query = (await runQuery(analyticsModule.queries.getAnalytics))
        .records;
      res.status(200).send({
        total: query.length,
        records: query.map((el: any) => el._fields[0].properties),
      });
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
