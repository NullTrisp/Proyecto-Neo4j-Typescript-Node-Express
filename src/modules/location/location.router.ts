import express, { Request, Response } from "express";
import { locationModule } from "./location.module";

export const locationRouter = express.Router({
  strict: true,
});

locationRouter.post("/infect", (req: Request, res: Response) => {
  locationModule.controller.infectLocation(req, res);
});
