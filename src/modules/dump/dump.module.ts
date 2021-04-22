import { DumpController } from "./dump.controller";
import { router as DumpRotuer } from "./dump.router";

export const dumpModule = {
  baseUri: "/dump",
  controller: DumpController,
  router: DumpRotuer,
};
