import { ListBrandsInterface } from "../../entities/brand/interfaces/list-brands";
import { getConnection } from "typeorm";
import { BrandModel } from "../../../database/models/brand.model";


export class ListBrandsImplementation implements ListBrandsInterface<any> {
 listBrands(){
   const repo = getConnection().getRepository(BrandModel)
   return repo.find();
 }
}