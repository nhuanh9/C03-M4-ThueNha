import homeService from "../service/homeService";

class HomeController{
    private homeService;
    constructor() {
        this.homeService = homeService;
    }
    add = async (req, res) => {
        let data = await this.homeService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await this.homeService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.homeService.delete(req.params.id);
        console.log(data)
        res.json(data)
    }
    findByName = async (req, res) => {
        let data = await this.homeService.findByName(req.query.name);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await this.homeService.findById(req.params.id);
        res.json(data)
    }
    getAll = async (req,res)=>{
        let list;
        // if (req.query.name){
        //     list = await this.homeService.findByName(req.query.name)
        // }else {
            list = await this.homeService.findAll()
        // }
        res.json(list)
    }


}
export default new HomeController();