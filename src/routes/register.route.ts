import { IUser } from "./../model/user.model";
import { Router } from "express";
import * as db from "../db/connection";
import hash from "../helper/hash.helper";
import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/vars.config";
import { cache } from "../db/cache";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, username, name } = req.body;

    const _ = await db.execute(
      `INSERT INTO User (email, password, username, name) VALUE (?, ?, ?, ?)`,
      [email, hash(password), username, name]
    );

    
    const account: IUser[] = await db.execute(
      `SELECT * FROM User WHERE username = ? AND password = ?`,
      [username, hash(password)]
      );
      
    await cache().set(account[0].user_id.toString(), account[0].name);

    const accessToken = sign(
      {
        user_id: account[0].user_id,
        username: username,
        isAdmin: account[0].isAdmin,
      },
      ACCESS_TOKEN_SECRET
    );

    return res.json({
      accessToken: "Bearer " + accessToken,
      isAdmin: account[0].isAdmin,
    });
  } catch (e) {
    return res.sendStatus(403);
  }
});

router.get("/register/email/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const result: IUser[] = await db.execute(
      `SELECT * FROM User WHERE email = ?`,
      [email]
    );

    if (result.length > 0) return res.sendStatus(403);

    return res.sendStatus(200);
  } catch {
    return res.sendStatus(500);
  }
});

router.get("/register/username/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const result: IUser[] = await db.execute(
      `SELECT * FROM User WHERE username = ?`,
      [username]
    );

    if (result.length > 0) return res.sendStatus(403);

    return res.sendStatus(200);
  } catch {
    return res.sendStatus(500);
  }
});

export { router as register };
