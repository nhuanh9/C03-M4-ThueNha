import {Order} from "../entity/Order";
import {AppDataSource} from "../data-source";

class OrderService {
    private repository = AppDataSource.getRepository(Order);
    findAll = async () => {
        return await this.repository.find(
            {
                relations: {
                    user: true,
                    home: true
                }
            }
        )
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

}

export default new OrderService()