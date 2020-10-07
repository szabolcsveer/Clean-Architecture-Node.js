import { getConnection, getRepository } from "typeorm";
import { BrandModel } from "../../../database/models/brand.model";
import GetBrandByIDInterface from "../../entities/brand/interfaces/get-brand-by-id";

export class GetBrandByIdImplementation implements GetBrandByIDInterface {
  async getByID(id: string){
    return await getConnection().getRepository(BrandModel).findOne(id);
  }
}

