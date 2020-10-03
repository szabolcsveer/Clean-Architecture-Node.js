
import * as express from "express";
import { Request, Response } from "express";
import { BrandModel } from "../../database/models/brand.model";
import { CreateBrandImplementation } from  '../../core/implementations/brand/create-brand-imp';

const router = express.Router();

 
router.post("/", async function (req: Request, res: Response) {
  const { id, name, productTypes, riders } = req.body;
  
  let brand = new BrandModel();
  brand.id = id;
  brand.name = name;
  brand.productTypes = productTypes;
  brand.riders = riders;

  const create = new CreateBrandImplementation();
  create.add(brand);

  return res.json("Created Successfully").status(200);
});

module.exports = router;
