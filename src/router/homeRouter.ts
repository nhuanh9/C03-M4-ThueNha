import {Router} from "express";
import homeController from "../controller/homeController";
import auth from "../middleware/jwt";
import {AuthorizeMiddleware} from "../middleware/authorize.middleware";

const homeRouter = Router();
// homeRouter.use(auth)
homeRouter.get('/', homeController.findAll);
homeRouter.get('/:id', homeController.findById);


// homeRouter.use(AuthorizeMiddleware.authorizedAdmin)

homeRouter.post('', homeController.add);
homeRouter.put('', homeController.update);
homeRouter.delete('', homeController.delete);
export default homeRouter;