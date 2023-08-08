import orderService from "../service/orderService";
class OrderController{

    // getAll = async (req,res) => {
    //     let {idHome} = req.query
    //     if (idHome == undefined){
    //         let data = await orderService.getAll()
    //         res.json(data)
    //     } else if (idHome != undefined){
    //         let data = await orderService.getAllInOrder(idHome)
    //         res.json(data)
    //     }
    //
    // }
    getAll = async (req,res)=>{
        let list = await orderService.getAllInOrder()
        res.json(list)
    }
    update = async (req, res) => {
        let data = await orderService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await orderService.delete(req.params.id);
        res.json(data)
    }
    add = async (req, res) => {
        let data = await orderService.add(req.body);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await orderService.findById(req.params.id)
        res.json(data)
    }
}
export default new OrderController()
