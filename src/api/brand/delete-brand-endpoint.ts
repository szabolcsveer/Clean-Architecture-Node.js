import * as express from "express";
import { Request, Response } from "express";
import { DeleteBrandImplementation } from '../../core/implementations/brand/delete-brand-imp';

const router = express.Router({ mergeParams: true });

router.delete("/", async (request: Request, response: Response) => {
  const deleteImplementation = new DeleteBrandImplementation();
  deleteImplementation.removeByID(request.params.id)

  return response.json('Successfully deleted');
});

module.exports = router;
