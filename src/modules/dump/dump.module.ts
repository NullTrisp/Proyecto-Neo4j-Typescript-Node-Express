import { DumpController } from "./dump.controller";
import { router as DumpRotuer } from "./dump.router";
import { dumpQueries } from "./dump.queries";

export const dumpModule = {
  baseUri: "/dump",
  controller: DumpController,
  router: DumpRotuer,
  queries: dumpQueries,
};
