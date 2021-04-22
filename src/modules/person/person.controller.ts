import { Request, Response } from "express";
import { DBDRIVER } from "../../bin/adapter";
import { personModule } from "./person.module";

export class PersonController {
  public static async infect(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const { infectNum = 1 as number } = req.body;
      const session = DBDRIVER.session();
      await session.run(personModule.queries.infectPerson.query, {
        infectNum: infectNum,
      });
      session.close();
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
      const session = DBDRIVER.session();
      await session.run();
      session.close();
      res.sendStatus(201);
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
      const session = DBDRIVER.session();
      await session.run();
      session.close();
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
