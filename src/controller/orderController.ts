import orderService from "../service/orderService";
 class OrderController{
     //
     getAll = async (req,res) => {
         let data = await orderService.getAll()
         res.json(data)
     }
 }
 export default new OrderController()