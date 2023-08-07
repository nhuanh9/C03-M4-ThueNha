import {AppDataSource} from "../data-source";
import {Order} from "../entity/Order";

class OrderService{
    private repository = AppDataSource.getRepository(Order)

    add = async (data)=>{
        return await this.repository.save(data);
    }
    delete = async (id) =>{
        return await this.repository.delete(id)
    }
    getAll = async () => {
        return await this.repository.find()
    }

}
export default new OrderService();