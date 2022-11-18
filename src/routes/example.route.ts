import { Router } from "express";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/auth.middleware";

const router = Router();

router.get("/example", authenticateToken, authorizeRole, async (req, res) => {
  /* CODE HERE */
  return res.sendStatus(200);
});

export { router as example };
