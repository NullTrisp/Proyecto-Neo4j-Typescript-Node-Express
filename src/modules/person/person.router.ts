import express, { Request, Response } from "express";
import { personModule } from "./person.module";

export const personRouter = express.Router({
  strict: true,
});

personRouter.post("/infect", (req: Request, res: Response) => {
  personModule.controller.infect(req, res);
});

personRouter.post("/relate/location", (req: Request, res: Response) => {
  personModule.controller.addVisited(req, res);
});

personRouter.delete("/relate/location", (req: Request, res: Response) => {
  personModule.controller.deleteVisited(req, res);
});

personRouter.post("/infect/related", (req: Request, res: Response) => {
  personModule.controller.infectRelated(req, res);
});

personRouter.post("/infect/visited", (req: Request, res: Response) => {
  personModule.controller.infectWithVisitedInfectedLocation(req, res);
});
