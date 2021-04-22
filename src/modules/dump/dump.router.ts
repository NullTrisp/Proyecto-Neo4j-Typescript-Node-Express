import express, { Request, Response } from "express";
import { dumpModule } from "./dump.module";

export const router = express.Router({
  strict: true,
});

router.post("/", (req: Request, res: Response) => {
  dumpModule.controller.dumpData(req, res);
});

router.delete("/", (req: Request, res: Response) => {
  dumpModule.controller.deleteDump(req, res);
});
