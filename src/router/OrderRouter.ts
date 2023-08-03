import { Router } from "express";
import orderController from "../controller/OrderController";

const orderRouter = Router();
orderRouter.get('', orderController.findAll);

orderRouter.delete('/:id', orderController.delete);


export default orderRouter