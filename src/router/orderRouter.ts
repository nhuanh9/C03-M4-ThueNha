import {Router} from "express";
import orderController from "../controller/orderController";
import auth from "../middleware/jwt";

const orderRouter = Router();
// orderRouter.use(auth)
orderRouter.get('/', orderController.getAll);
// orderRouter.get('/:id', orderController.findById);
// orderRouter.post('', orderController.add);
// orderRouter.put('/:id', orderController.update);
// orderRouter.delete('/:id', orderController.delete);
export default orderRouter;