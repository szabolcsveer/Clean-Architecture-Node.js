import * as express from "express";
import { Request, Response } from "express";
import { GetBrandByIdImplementation } from "../../core/implementations/brand/get-brand-by-id-imp";

const router = express.Router({ mergeParams: true });

router.get("/", async (request: Request, response: Response) => {
  const getById = new GetBrandByIdImplementation();

  const brand = await getById.getByID(request.params.id);
  return response.json(brand).status(200);
});

module.exports = router;
