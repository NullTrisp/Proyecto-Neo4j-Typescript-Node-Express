import { module } from "../../classes/datatypes/module";
import { AnalyticsController } from "./analytics.controller";
import { analyticsQueries } from "./analytics.queries";
import { analyticsRouter } from "./analytics.router";

export const analyticsModule: module = {
  baseUri: "/analytics",
  controller: AnalyticsController,
  queries: analyticsQueries,
  router: analyticsRouter,
};
