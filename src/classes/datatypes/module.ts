import { Router } from "express";
import { queries } from "./queries";

export type module = {
  baseUri: string;
  controller: any; //TODO FIND A WAY TO WORK AROUND CONTROLLERS
  queries: queries;
  router: Router;
};
