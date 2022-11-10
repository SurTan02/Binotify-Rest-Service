import { Connection, createConnection } from "mysql2";
import { DATA_SOURCES } from "../config/vars.config";

export const db: Connection = createConnection(DATA_SOURCES);
