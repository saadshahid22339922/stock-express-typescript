import { Router } from "express";
import StockLevelRoutes from './stock.level.routes';

const RouterSetup = (app: any) => {
    const router = Router();
    router.use("/stock", StockLevelRoutes);
    
    app.use("/api", router);
}

export default RouterSetup
