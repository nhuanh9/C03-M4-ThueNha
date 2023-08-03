import {Router} from "express";
import homeController from "../controller/HomeController";
import {auth} from "../middleware/jwt";

const homeRouter = Router();
// productRouter.use(auth)
homeRouter.get('', homeController.findAll);

homeRouter.delete('/:id', homeController.delete);

export default homeRouter;
