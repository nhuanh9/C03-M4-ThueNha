import {Request, Response} from "express";
import userService from "../service/userService";
import jwt from 'jsonwebtoken'

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

        let  data = await userService.findAll()
            res.json(data)}

    // findByToken = async (req: Request, res: Response) => {
    //     let token=req.headers.authorization;
    //     let payload = jwt.decode(token)
    //     // @ts-ignore
    //     let data = await userService.findById(payload.idUser)
    //     res.json(data)
    // }

}

export default new UserController();