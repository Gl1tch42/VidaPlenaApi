import { Router, Request, Response  } from "express";

import auth from "./auth/index.routes";
import course from "./course/index.routes";

const routes = Router();

routes.use("/user", auth);
routes.use("/course", course);


export default routes;