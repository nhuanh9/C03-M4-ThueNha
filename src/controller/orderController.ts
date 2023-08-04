import orderService from "../service/orderService";

class OrderController {
    private orderService;
    constructor() {
        this.orderService = orderService;
    }

    findAll = async (req, res) => {
        let list = await  this.orderService.findAll()
        res.json(list)
    }

    delete = async (req, res) => {
        let data = await this.orderService.delete(req.params.id);
        res.json(data);
    }

    update = async (req, res) => {
        let data = await this.orderService.update(req.params.id, req.body);
        res.json(data);
    }

}

export default new OrderController();