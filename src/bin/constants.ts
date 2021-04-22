import { config } from "dotenv";
config();

export const CONSTANTS = {
  DBURI: process.env.DBURI as string,
  DBUSER: process.env.DBUSER as string,
  DBPASS: process.env.DBURI as string,
};
