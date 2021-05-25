import path from "path";
import { queries } from "../../classes/datatypes/queries";

export const dumpQueries: queries = {
  loadLocations: {
    query:
      "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Location {zip_code: row.zip_code, name: row.location, infected: row.infected})",
    params: {
      location:
        "file:///" + path.join(__dirname, "..", "..", "data", "location.csv"),
    },
  },
  loadLiteLocations: {
    query:
      "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Location {zip_code: row.zip_code, name: row.location, infected: row.infected})",
    params: {
      location:
        "file:///" + path.join(__dirname, "..", "..", "data", "location_lite.csv"),
    },
  },
  loadPeople: {
    query:
      "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Person {dni: row.DNI, name: row.firstname, last_name: row.lastname, infected: toBoolean(row.infected)})",
    params: {
      location:
        "file:///" + path.join(__dirname, "..", "..", "data", "people.csv"),
    },
  },
  loadLitePeople: {
    query:
      "LOAD CSV WITH HEADERS FROM $location as row CREATE (:Person {dni: row.DNI, name: row.firstname, last_name: row.lastname, infected: toBoolean(row.infected)})",
    params: {
      location:
        "file:///" + path.join(__dirname, "..", "..", "data", "people_lite.csv"),
    },
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
