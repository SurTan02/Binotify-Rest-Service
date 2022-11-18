import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/vars.config";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];(token)

  if (token == null) return res.sendStatus(401);

  verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    // @ts-ignore
    req.user = user;
    next();
  });
}

export function authorizeRole(req: Request, res: Response, next: NextFunction) {
  // @ts-ignore
  if (!req.user.isAdmin) return res.sendStatus(400);
  next();
}
