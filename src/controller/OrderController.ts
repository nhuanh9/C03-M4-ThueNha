import {Request, Response} from "express";
import orderService from "../service/OrderService";
import homesService from "../service/HomesService";

class OrderController {
    findAll = async (req: Request, res: Response) => {
        let listHomes = await orderService.findAll();
        res.json(listHomes)
    }
    delete = async (req: Request, res: Response) => {
        let data = await orderService.delete(req.params.id);
        res.json(data)
    }
}

export default new OrderController();
