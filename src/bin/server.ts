import { app } from "./app";
import { CONSTANTS } from "./constants";

export const server = new app().getApp().listen(CONSTANTS.PORT, () => {
  console.log("Server Up!");
});
