import * as express from "express";
import { Request, Response } from "express";
import { ListBrandsImplementation } from "../../core/implementations/brand/list-brands-imp";

const router = express.Router();

router.get("/", async (request: Request, response: Response) => {
  const list = new ListBrandsImplementation();
   
  const brands = await list.listBrands()
  return response.json(brands);
});

module.exports = router;
