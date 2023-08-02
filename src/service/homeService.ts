import {Service} from "./Service";
import {Homes} from "../entity/Homes";
import {AppDataSource} from "../data-source";

class HomeService implements Service<Homes>{
    private repository = AppDataSource.getRepository(Homes)
    add = async (data)=>{
        return await this.repository.save(data)
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findAll = async () => {
        return await this.repository.find({
            relations: {
                Users: true
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