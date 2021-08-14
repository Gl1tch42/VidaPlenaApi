import { Router, Request, Response  } from "express";

import userCrtl from "./../../controller/auth.controller";

const router = Router();

router.post('/register', userCrtl.register);

router.post('/login', userCrtl.login);

router.get('/logout',userCrtl.logout);

router.get('/refresh_token', userCrtl.refreshToken)


export default router;
