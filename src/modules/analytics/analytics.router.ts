import express, { Request, Response } from "express";
import { analyticsModule } from "./analytics.module";

export const analyticsRouter = express.Router({
  strict: true,
});

analyticsRouter.post("/", (req: Request, res: Response) => {
  analyticsModule.controller.createAnalytics(req, res);
});

analyticsRouter.get("/", (req: Request, res: Response) => {
  analyticsModule.controller.getAnalytics(req, res);
});
