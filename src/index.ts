import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

/* TO DO: move to config file*/
const port = process.env.BINOTIFY_APP_WEB_PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send(
    `<h1 style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 144px">
    🔥
    </h1>`
  );
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
