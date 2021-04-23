import { queries } from "../../classes/datatypes/queries";

export const personQueries: queries = {
  relatePeopleWithLocation: {
    query:
      "MATCH (n:Person) WITH COLLECT(n) as ns, COUNT(n) as lens MATCH (p:Location) WITH ns, lens, COLLECT(p) as ps, COUNT(p) AS lenp  FOREACH(i IN RANGE(1, ToInteger(lenp / 3) * 2) | FOREACH (x IN [ns[ToInteger(rand()*lens)]] | FOREACH(y IN [ps[ToInteger(rand()*lenp)]] | CREATE(x)-[:VISITED]->(y))))",
  },
  deleteRelationVisited: {
    query: "MATCH (:Person)-[r:VISITED]->(:Location) DELETE r",
  },
  infectPerson: {
    query:
      "MATCH (n:Person) WITH COLLECT(n) as ns, COUNT(n) as len FOREACH(i in RANGE(1, $infectNum) | FOREACH(p in [ns[ToInteger(rand()*len)]] | SET p.infected = true SET p:Infected))",
  },
  addRelated: {
    query: "",
  },
  infectRelated: {
    query:
      "MATCH (:Infected)-[:RELATED*1..2]->(p:Person) with collect(p) as ns FOREACH(i in ns | SET i:Infected SET i.infected = true)",
  },
  infectPersonVisitedInfectedLocation: {
    query:
      "MATCH (:Location:Infected)<-[:VISITED]-(n:Person) WITH COLLECT(n) AS ns FOREACH(i IN ns | SET i.infected = true SET i:Infected)",
  },
};
