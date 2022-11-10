import express, { Express, Request, Response } from "express";
import { QueryError, RowDataPacket } from "mysql2";
import { PORT } from "./config/vars.config";
import { db } from "./db/connection";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send(
    `<h1 style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 144px">
    🔥
    </h1>`
  );
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
