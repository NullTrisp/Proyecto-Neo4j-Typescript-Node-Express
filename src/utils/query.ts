import { Result } from "neo4j-driver";
import { query } from "../classes/datatypes/queries";
import { DBDRIVER } from "../bin/adapter";

export async function runQuery(exec: query): Promise<Result> {
  try {
    const session = DBDRIVER.session();
    const result = await session.run(exec.query, exec.params);
    session.close;

    return result;
  } catch (err) {
    throw err;
  }
}
