import { module } from "../../classes/datatypes/module";
import { LocationController } from "./location.controller";
import { locationQueries } from "./location.queries";
import { locationRouter } from "./location.router";

export const locationModule: module = {
  baseUri: "/location",
  controller: LocationController,
  queries: locationQueries,
  router: locationRouter,
};
