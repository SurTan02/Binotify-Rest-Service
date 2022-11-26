import express, { Express, Request, Response } from "express";
import { corsOptions, PORT } from "./config/vars.config";
import * as db from "./db/connection";
import { routes } from "./routes/routes";
import cors from "cors";

db.init();

const app: Express = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send(
    `<h1 style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 144px">
    🔥
    </h1>`
  );
});

app.use(routes);

app.listen(PORT, async () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
