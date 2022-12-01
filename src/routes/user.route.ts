import { IUser } from "./../model/user.model";
import { Router } from "express";
import * as db from "../db/connection";

const router = Router();

// get user
router.get("/user",  async (req, res) => {
  try {
    // const user_id = (<any>req).user.user_id;
    const listOfUser: IUser[] = await db.execute(
      `SELECT * FROM User WHERE isAdmin=0`,
      []
    );

    return res.json(listOfUser);
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.get("/admin",  async (req, res) => {
  try {
    const listOfUser = await db.execute(
      `SELECT email FROM User WHERE isAdmin=1`,
      []
    );
    return res.json(listOfUser);
  } catch (e) {
    return res.sendStatus(500);
  }
});

export { router as user };
