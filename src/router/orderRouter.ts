import {Router} from "express";
import orderController from "../controller/orderController";
import auth from "../middleware/jwt";

const orderRouter = Router();
// homeRouter.use(auth)
orderRouter.get('/', orderController.findAll);

orderRouter.delete('', orderController.delete);

orderRouter.put('/:id', orderController.update);
export default orderRouter;