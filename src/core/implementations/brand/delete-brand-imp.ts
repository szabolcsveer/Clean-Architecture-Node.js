import {DeleteBrandInterface} from '../../entities/brand/interfaces/delete-brands';
import { getConnection } from "typeorm";
import { BrandModel } from '../../../database/models/brand.model';

export class DeleteBrandImplementation implements DeleteBrandInterface {
  removeByID(id: string) {
    getConnection().manager.delete(BrandModel,id);
  }
}