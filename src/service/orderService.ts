import {AppDataSource} from "../data-source";
import {Order} from "../entity/Order";
import * as assert from "assert";

class OrderService{
    private repository = AppDataSource.getRepository(Order)

    add = async (data)=>{
        return await this.repository.save(data)
    }
    delete = async (id) =>{
        return this.repository.delete(id)
    }
    getAll = async () => {
        return this.repository.find()
    }
    getAllInOrder = async () =>{
        return await this.repository.createQueryBuilder("order")

            .leftJoinAndSelect("order.user","user")
            .leftJoinAndSelect("order.home", "home")
            // .where("home.id = :id", {id})
            .getMany()
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findById = async (id) => {
        return await this.repository.createQueryBuilder("order")

            .leftJoinAndSelect("order.user","user")
            .leftJoinAndSelect("order.home", "home")
            .where("user.id = :id", {id})
            .getMany()
    }

}
export default new OrderService();