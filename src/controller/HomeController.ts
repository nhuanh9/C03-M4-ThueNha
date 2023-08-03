import {Request, Response} from "express";
import homesService from "../service/HomesService";

class HomeController {
    findAll = async (req: Request, res: Response) => {
        let listHomes = await homesService.findAll();
        res.json(listHomes)
    }
    delete = async (req: Request, res: Response) => {
        let data = await homesService.delete(req.params.id);
        res.json(data)
    }






}

export default new HomeController();
