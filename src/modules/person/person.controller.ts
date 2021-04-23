import { Request, Response } from "express";
import { runQuery } from "../../utils/query";
import { personModule } from "./person.module";

export class PersonController {
  public static async infect(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const { infectNum = 1 } = req.body;
      runQuery(personModule.queries.infectPerson.query, {
        infectNum: infectNum as number,
      });
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async addRelated(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(personModule.queries.addRelated.query);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async addVisited(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(personModule.queries.relatePeopleWithLocation.query);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async deleteVisited(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(personModule.queries.deleteRelationVisited.query);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async infectRelated(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(personModule.queries.infectRelated.query);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async infectWithVisitedInfectedLocation(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      await runQuery(
        personModule.queries.infectPersonVisitedInfectedLocation.query
      );
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
