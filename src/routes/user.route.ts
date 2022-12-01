import { IUser } from "./../model/user.model";
import { Router } from "express";
import * as db from "../db/connection";
import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

// get user
router.get("/user", async (req, res) => {
  try {
    const SOMETHING = "tes gaguna sih ni";
    const listOfSong: IUser[] = await db.execute(
      `SELECT * FROM User WHERE isAdmin = False`,
      [SOMETHING]
    );

    return res.json(listOfSong);
  } catch (e) {
    return res.sendStatus(500);
  }
});

export { router as user };
