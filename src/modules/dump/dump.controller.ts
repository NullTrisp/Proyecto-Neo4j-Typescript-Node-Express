import { DBDRIVER } from "../../bin/adapter";
import { Request, Response } from "express";

export class DumpController {
  public static async dumpData(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const session = DBDRIVER.session();
      await session.run(
        "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Location {name: row.location})",
        {
          location: `file:///${__dirname}/../../data/location.csv`,
        }
      );
      await session.run(
        "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Person {name: row.firstname, last_name: row.lastname})",
        {
          location: `file:///${__dirname}/../../data/people.csv`,
        }
      );
      await session.run(
        "MATCH (n:Person) WITH COLLECT(n) as ns, COUNT(n) as lens MATCH (p:Location) WITH ns, lens, COLLECT(p) as ps, COUNT(p) AS lenp FOREACH(i IN RANGE(1, 300) | FOREACH (x IN [ns[ToInteger(rand()*lens)]] | FOREACH(y IN [ps[ToInteger(rand()*lenp)]] | CREATE(x)-[:VISITED]->(y))))"
      );
      await session.run(
        "MATCH (n:Person) WITH COLLECT(n) as ns, COUNT(n) as lens FOREACH(i IN RANGE(1, 5000) | FOREACH (x IN [ns[ToInteger(rand()*lens)]] | FOREACH(y IN [ns[ToInteger(rand()*lens)]] | CREATE(x)-[:RELATED]->(y) CREATE(x)<-[:RELATED]-(y))))"
      );
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
      await session.run("MATCH ()-[r:RELATED]->() DELETE r");
      await session.run("MATCH ()-[r:VISITED]->() DELETE r");
      await session.run("MATCH (n) DELETE n");
      session.close();
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
}
