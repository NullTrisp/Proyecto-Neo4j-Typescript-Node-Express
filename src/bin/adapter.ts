import neo4j from "neo4j-driver";
import { CONSTANTS } from "./constants";

export const driver = neo4j.driver(
  CONSTANTS.DBURI,
  neo4j.auth.basic(CONSTANTS.DBUSER, CONSTANTS.DBPASS)
);
