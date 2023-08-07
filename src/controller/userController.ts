import {Request, Response} from "express";
import userService from "../service/userService";
const session = require('express-session');

class UserController {


    register = async (req: Request, res: Response) => {
        await userService.register(req.body);
        res.status(201).json('Create user success')
    }

    login = async (req: Request, res: Response) => {
        let resultCheck = await userService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }
    findAll = async (req: Request, res: Response) => {
        let data = await userService.findAll()
        res.json(data)
    }
    findById = async (req: Request, res: Response) => {
        let data = await userService.findById(req.params.id)
        res.json(data)
    }

}

export default new UserController();