import express, { Request, Response } from "express";
import { dumpModule } from "./dump.module";

export const dumpRouter = express.Router({
  strict: true,
});

dumpRouter.post("/", (req: Request, res: Response) => {
  dumpModule.controller.dumpData(req, res);
});

dumpRouter.delete("/", (req: Request, res: Response) => {
  dumpModule.controller.deleteDump(req, res);
});
