import {Router} from "express";
import homeRouter from "./homeRouter";

const router= Router();
router.use('/homes', homeRouter)
export default router;