import { Request, Response } from "express";
import { runQuery } from "../../utils/query";
import { personModule } from "./person.module";
import neo4j from "neo4j-driver";

export class PersonController {
  public static async getInfectedPeople(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const infectePeople = await runQuery(
        personModule.queries.getInfectedPeople
      );

      res.status(200).send({
        total: infectePeople.records.length,
        records: infectePeople.records.map(
          (el: any) => el._fields[0].properties
        ),
      });
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async infect(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const { infectNum = 1 } = req.body;
      personModule.queries.infectPerson.params = {
        infectNum: neo4j.int(infectNum),
      };
      await runQuery(personModule.queries.infectPerson);
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
      await runQuery(personModule.queries.addRelated);
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
      await runQuery(personModule.queries.relatePeopleWithLocation);
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
      await runQuery(personModule.queries.deleteRelationVisited);
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
      await runQuery(personModule.queries.infectRelated);
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
      await runQuery(personModule.queries.infectPersonVisitedInfectedLocation);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async getPeople(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const people = await runQuery(personModule.queries.getPeople);

      res.status(200).send({
        total: people.records.length,
        records: people.records.map((el: any) => el._fields[0].properties),
      });
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }

  public static async getRelated(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const people = await runQuery(personModule.queries.getRelated);

      res.status(200).send({
        total: people.records.length,
        relations: people.records.map((el: any) => {
          return {
            start: el._fields[0].start.properties.dni,
            end: el._fields[0].end.properties.dni,
          };
        }),
        startNodes: people.records.map(
          (el: any) => el._fields[0].start.properties
        ),
        endNodes: people.records.map((el: any) => el._fields[0].end.properties),
      });
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
