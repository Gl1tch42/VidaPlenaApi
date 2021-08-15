import { Router, Request, Response  } from "express";

import courseCtrl from "./../../controller/course.controller";

import auth from "./../../middlewares/auth.middleware";

const router = Router();

router.get('/getVideos', auth, courseCtrl.getVideos);

router.post('/getVideoById', auth, courseCtrl.getVideoById);



export default router;
