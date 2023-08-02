import {Service} from "./Service";
import {Home} from "../entity/Home";
import {AppDataSource} from "../data-source";

class HomeService implements Service<Home>{
    private repository = AppDataSource.getRepository(Home)
    add = async (data)=>{
        return await this.repository.save(data)
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findAll = async () => {
        return await this.repository.find({
            relations: {
                user: true
            }
        });
    }

    findById = async (id) => {
        return await this.repository.find({
            where: {
                id: id
            }
        })
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }

}
export default new HomeService();