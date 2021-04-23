import { Result } from "neo4j-driver";
import { Parameters } from "neo4j-driver/types/query-runner";
import { DBDRIVER } from "../bin/adapter";

export async function runQuery(
  query: string,
  params?: Parameters
): Promise<Result> {
  try {
    const session = DBDRIVER.session();
    const result = await session.run(query, params);
    session.close;

    return result;
  } catch (err) {
    throw err;
  }
}
