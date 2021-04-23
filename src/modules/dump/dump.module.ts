import { DumpController } from "./dump.controller";
import { dumpRouter } from "./dump.router";
import { dumpQueries } from "./dump.queries";
import { module } from "../../classes/datatypes/module";

export const dumpModule: module = {
  baseUri: "/dump",
  controller: DumpController,
  queries: dumpQueries,
  router: dumpRouter,
};
