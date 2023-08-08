import {Router} from "express";
import userController from "../controller/userController";

export const userRouter = Router();
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login)
userRouter.get('/', userController.findAll)
// userRouter.get('/:id', userController.findById)