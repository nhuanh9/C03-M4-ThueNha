import {Router} from "express";
import homeRouter from "./homeRouter";
import {userRouter} from "./userRouter";
import orderRouter from "./orderRouter";

const router= Router();
router.use('/homes', homeRouter)
router.use('/users', userRouter)
router.use('/orders', orderRouter)
export default router;
