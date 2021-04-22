import { PersonController } from "./person.controller";
import { personQueries } from "./person.queries";
import { router as personRouter } from "./person.router";

export const personModule = {
  baseUri: "/person",
  controller: PersonController,
  queries: personQueries,
  router: personRouter,
};
