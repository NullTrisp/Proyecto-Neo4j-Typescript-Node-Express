import express, { Request, Response } from "express";
import { personModule } from "./person.module";

export const router = express.Router({
  strict: true,
});

router.post("/infect", (req: Request, res: Response) => {
  personModule.controller.infect(req, res);
});
