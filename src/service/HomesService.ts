import {AppDataSource} from "../data-source";
import {Homes} from "../entity/Homes";

class HomesService {
    private repository = AppDataSource.getRepository(Homes);

    findAll = async () => {
        return await this.repository.find({
            relations: {
                Users: true
            }
        });
    }

    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }

}
export default new HomesService();
