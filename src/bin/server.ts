import { app } from "./app";

export const server = new app().getApp().listen(4000, () => {
  console.log("Server Up!");
});
