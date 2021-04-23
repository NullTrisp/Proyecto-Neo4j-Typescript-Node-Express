import { queries } from "../../classes/datatypes/queries";

export const personQueries: queries = {
  infectPerson: {
    query:
      "MATCH (n:Person) WITH COLLECT(n) as ns, COUNT(n) as len FOREACH(i in RANGE(1, $infectNum) | FOREACH(p in [ns[ToInteger(rand()*len)]] | SET p.infected = true SET p:Infected))",
  },
};
