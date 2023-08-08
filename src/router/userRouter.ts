import {Router} from "express";
import userController from "../controller/userController";
import homeController from "../controller/homeController";
import homeRouter from "./homeRouter";

export const userRouter = Router();
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login)
userRouter.get('/', userController.findAll)
userRouter.get('/:id', userController.findById)
userRouter.delete('/:id', userController.delete)