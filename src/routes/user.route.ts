import { Router } from "express";
import * as db from "../db/connection";
import { cache } from "../db/cache";

const router = Router();

// get user
router.get("/user", async (req, res) => {
  try {
    let listOfUser: { user_id: number; name: string }[] = [];

    const keys = await cache().keys("*");

    for await (const key of keys) {
      const penyanyi: { user_id: number; name: string } = {
        user_id: Number(key),
        name: (await cache().get(key))!,
      };
      console.log(penyanyi);
      listOfUser.push(penyanyi);
    }

    return res.json(listOfUser);
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.get("/admin", async (req, res) => {
  try {
    const listOfUser = await db.execute(
      `SELECT email FROM User WHERE isAdmin = 1`,
      []
    );
    return res.json(listOfUser);
  } catch (e) {
    return res.sendStatus(500);
  }
});

export { router as user };
