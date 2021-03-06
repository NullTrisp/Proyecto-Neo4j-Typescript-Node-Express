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

personRouter.get("/infected", (req: Request, res: Response) => {
  personModule.controller.getInfectedPeople(req, res);
});

personRouter.get("/", (req: Request, res: Response) => {
  personModule.controller.getPeople(req, res);
});

personRouter.get("/related", (req: Request, res: Response) => {
  personModule.controller.getRelated(req, res);
});

personRouter.get("/related/:dni", (req: Request, res: Response) => {
  personModule.controller.getRelatedDni(req, res);
});

personRouter.get("/nextinfected", (req: Request, res: Response) => {
  personModule.controller.getNextDayInfected(req, res);
});

personRouter.post("/shortestpath", (req: Request, res: Response) => {
  personModule.controller.getShortestPath(req, res);
});
