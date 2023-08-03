import {AppDataSource} from "../data-source";
import {Orders} from "../entity/Orders";

class OrderService {
    private repository = AppDataSource.getRepository(Orders);

    findAll = async () => {
        return await this.repository.find({
            relations: {
                Users: true,
                Homes: true
            }
        })
    }

    delete = async (id) => {
        return await this.repository.delete(id)
    }

}
export default new OrderService()