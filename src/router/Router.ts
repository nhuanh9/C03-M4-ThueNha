import {Router} from "express";
import homeRouter from "./homeRouter";
import {userRouter} from "./userRouter";

const router= Router();
router.use('/homes', homeRouter)
router.use('/', userRouter)
export default router;