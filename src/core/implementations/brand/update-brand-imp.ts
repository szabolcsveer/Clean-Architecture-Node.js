import { getConnection } from "typeorm";
import { BrandModel } from "../../../database/models/brand.model";
import { UpdateBrandInterface } from "../../entities/brand/interfaces/update-brand";

export class UpdateBrandImplementation implements UpdateBrandInterface {
  updateBrandByID(id: string, updatedBrand: object) {
    return getConnection().manager.update(BrandModel,id,updatedBrand)
  }
}