
import {Router} from "express";
import orderController from "../controller/orderController";

const orderRouter = Router();
// homeRouter.use(auth)
orderRouter.get('/', orderController.getAll);
orderRouter.get('/:id', orderController.findById);
orderRouter.post('', orderController.add);
orderRouter.put('/:id', orderController.update);
orderRouter.delete('/:id', orderController.delete);
export default orderRouter;