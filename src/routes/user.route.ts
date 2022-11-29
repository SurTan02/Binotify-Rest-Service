import { IUser } from "./../model/user.model";
import { Router } from "express";
import * as db from "../db/connection";
import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

// get user
router.get("/user",  async (req, res) => {
  try {
    const user_id = (<any>req).user.user_id;
    const listOfUser: IUser[] = await db.execute(
      `SELECT * FROM User WHERE user_id = ?`,
      [user_id]
    );

    return res.json(listOfUser);
  } catch (e) {
    return res.sendStatus(500);
  }
});

export { router as user };
