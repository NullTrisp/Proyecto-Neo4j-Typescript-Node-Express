import { Parameters } from "neo4j-driver/types/query-runner";

export type queries = {
  [key: string]: query;
};

type query = {
  query: string;
  params?: Parameters;
};
