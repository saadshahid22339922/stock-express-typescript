import { Router, Request, Response } from "express"
import { getCurrentStockLevel } from '../service/stock.level.service'
const router = Router();


router.get("/", async (req: Request, res: Response) => {
    try {
        const sku = req.query.sku as string | any;
        let data = await getCurrentStockLevel(sku);
        res.status(200).send(data);
    } catch (error: any) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error?.message,
        })
    }
});

export default router;