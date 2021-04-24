import { queries } from "../../classes/datatypes/queries";

export const locationQueries: queries = {
  infectLocation: {
    query:
      "MATCH (:Infected)-[:VISITED]->(n:Location) WITH COLLECT(n) as ns FOREACH(i IN ns | SET i.infected = true SET i:Infected)",
  },
  getInfectedLocations: {
    query: "MATCH (n:Infected:Location) RETURN n"
  }
};
