import { module } from "../../classes/datatypes/module";
import { PersonController } from "./person.controller";
import { personQueries } from "./person.queries";
import { personRouter } from "./person.router";

export const personModule: module = {
  baseUri: "/person",
  controller: PersonController,
  queries: personQueries,
  router: personRouter,
};
