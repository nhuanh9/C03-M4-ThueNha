import {Router} from "express";
import homeRouter from "./homeRouter";
import {userRouter} from "./userRouter";

const router= Router();
router.use('/home', homeRouter)
router.use('/', userRouter)
export default router;