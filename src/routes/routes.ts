import { Router } from "express";
import { example } from "./example.route";
import { login } from "./login.route";
import { register } from "./register.route";

const routes = Router();

routes.use(register);
routes.use(login);
routes.use(example);

export { routes };
