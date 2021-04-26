import { config } from "dotenv";
config();

export const CONSTANTS = {
  DBURI: process.env.DBURI as string,
  DBUSER: process.env.DBUSER as string,
  DBPASS: process.env.DBPASS as string,
  PORT: (process.env.PORT as unknown) as number,
  ORIGIN: process.env.ORIGIN as string,
};
