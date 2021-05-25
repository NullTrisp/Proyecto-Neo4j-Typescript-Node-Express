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
  getInfectedPeople: {
    query: "MATCH (n:Infected:Person) RETURN n",
  },
  getPeople: {
    query: "MATCH(n:Person) return n",
  },
  getRelated: {
    query:
      "MATCH n=(:Person)-[:RELATED*0..2]->(:Person:Infected) RETURN n limit 600",
  },
  getRelatedDni: {
    query:
      "MATCH (:Person {dni: $dni})-[:RELATED]->(a:Person) RETURN properties(a)",
    params: {},
  },
  getNextDayInfected: {
    query:
      "MATCH (p:Person {infected: false})-[:RELATED]->(:Person:Infected) return p",
  },
  getNextDayInfected2: {
    query:
      "MATCH (n:Person {infected: false})-[:RELATED]->(:Person {infected: false})-[:RELATED]->(:Person:Infected) return n",
  },
  getShortestPath: {
    query:
      "MATCH (a:Person {dni: $init}) WITH a MATCH (b:Person {dni: $end}) WITH a,b return shortestpath((a)-[:RELATED*..]->(b))",
    params: {},
  },
};
