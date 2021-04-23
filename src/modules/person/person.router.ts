import express, { Request, Response } from "express";
import { personModule } from "./person.module";

export const personRouter = express.Router({
  strict: true,
});

personRouter.post("/infect", (req: Request, res: Response) => {
  personModule.controller.infect(req, res);
});
