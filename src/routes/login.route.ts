import { Router } from "express";
import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/vars.config";
import * as db from "../db/connection";
import hash from "../helper/hash.helper";
import { IUser } from "../model/user.model";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const account: IUser[] = await db.execute(
      `SELECT * FROM User WHERE username = ? AND password = ?`,
      [username, hash(password)]
    );

    if (account.length === 0) return res.sendStatus(403);

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
  } catch {
    return res.sendStatus(500);
  }
});

export { router as login };
