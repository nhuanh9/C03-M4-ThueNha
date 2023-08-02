import {Router} from "express";
import homeController from "../controller/homeController";
import auth from "../middleware/jwt";

const homeRouter = Router();
homeRouter.use(auth)
homeRouter.get('', homeController.getAll);
homeRouter.post('', homeController.add);

 export default homeRouter;