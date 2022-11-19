import { Router } from "express";
import * as db from "../db/connection";
import hash from "../helper/hash.helper";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, username, name } = req.body;

    const _ = await db.execute(
      `INSERT INTO User (email, password, username, name) VALUE (?, ?, ?, ?)`,
      [email, hash(password), username, name]
    );

    return res.sendStatus(200);
  } catch {
    return res.sendStatus(500);
  }
});

export { router as register };
