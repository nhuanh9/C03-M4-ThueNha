import {Router} from "express";

import {userRouter} from "./userRouter";
import homeRouter from "./homeRouter";
import orderRouter from "./orderRouter";


const router= Router();
router.use('/homes', homeRouter)
router.use('/orders', orderRouter)
router.use('/', userRouter)
export default router;
