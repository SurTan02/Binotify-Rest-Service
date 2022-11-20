import { Router } from "express";
import { example } from "./example.route";
import { login } from "./login.route";
import { register } from "./register.route";
import { song } from "./song.route";
import { subscription } from "./subscription.route";

const routes = Router();

routes.use(register);
routes.use(login);
routes.use(example);
routes.use(song);
routes.use(subscription);

export { routes };
