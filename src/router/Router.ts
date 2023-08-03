import {Router} from "express";
import homeRouter from "./HomeRouter";
import {userRouter} from "./UserRouter";
import orderRouter from "./OrderRouter";


const router = Router();
router.use('/homes', homeRouter);

router.use('', userRouter);

router.use('/orders', orderRouter)
export default router;
