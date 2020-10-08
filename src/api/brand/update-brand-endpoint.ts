import * as express from 'express';
import { Request, Response } from 'express';
import { UpdateBrandImplementation } from '../../core/implementations/brand/update-brand-imp';

const router = express.Router({ mergeParams: true });

router.put('/', (request: Request, response: Response) => {
  const updateBrand = new UpdateBrandImplementation()
  
  console.log(request.body);
  const updatedBrand = updateBrand.updateBrandByID(request.params.id, request.body)
  return response.json(updateBrand).status(200);
});

module.exports = router;
