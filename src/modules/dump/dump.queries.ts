export const dumpQueries = {
  loadLocations: {
    query:
      "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Location {name: row.location})",
    file: `file:///${__dirname}/../../data/location.csv`,
  },
  loadPeople: {
    query:
      "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Person {name: row.firstname, last_name: row.lastname})",
    file: `file:///${__dirname}/../../data/people.csv`,
  },
  relatePeopleWithLocation: {
    query:
      "MATCH (n:Person) WITH COLLECT(n) as ns, COUNT(n) as lens MATCH (p:Location) WITH ns, lens, COLLECT(p) as ps, COUNT(p) AS lenp  FOREACH(i IN RANGE(1, ToInteger(lenp / 3) * 2) | FOREACH (x IN [ns[ToInteger(rand()*lens)]] | FOREACH(y IN [ps[ToInteger(rand()*lenp)]] | CREATE(x)-[:VISITED]->(y))))",
  },
  relatePeoplewithPeople: {
    query:
      "MATCH (n:Person) WITH COLLECT(n) as ns, COUNT(n) as lens FOREACH(i IN RANGE(1, ToInteger(lens / 3) * 2) | FOREACH (x IN [ns[ToInteger(rand()*lens)]] | FOREACH(y IN [ns[ToInteger(rand()*lens)]] | CREATE(x)-[:RELATED]->(y) CREATE(x)<-[:RELATED]-(y))))",
  },
  deleteRelationRelated: {
    query: "MATCH ()-[r:RELATED]->() DELETE r;",
  },
  deleteRelationVisited: {
    query: "MATCH ()-[r:VISITED]->() DELETE r",
  },
  deleteNodes: {
    query: "MATCH (n) DELETE n",
  },
};
