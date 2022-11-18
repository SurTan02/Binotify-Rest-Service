import { Pool, createPool } from "mysql2";
import { DATA_SOURCES } from "../config/vars.config";

let pool: Pool;

/**
 * generates pool connection to be used throughout the app
 */
export const init = () => {
  try {
    pool = createPool(DATA_SOURCES);

    console.debug("Database connected!");
  } catch (error) {
    console.error("[Error]: ", error);
    throw new Error("Fail to connect database!");
  }
};

/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
export const execute = <T>(
  query: string,
  params: string[] | Object
): Promise<T> => {
  try {
    if (!pool)
      throw new Error(
        "Mana di mana database saya~~"
      );

    return new Promise<T>((resolve, reject) => {
      pool.execute(query, params, (error, results) => {
        if (error) reject(error);
        //@ts-ignore
        else resolve(results);
      });
    });
  } catch (error) {
    console.error("[Error]: ", error);
    throw error;
  }
};
