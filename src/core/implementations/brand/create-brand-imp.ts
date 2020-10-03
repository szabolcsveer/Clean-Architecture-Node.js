import { createBrandUseCaseFactory } from "../../use-cases/brand/create-brand-use-case";
import PostBrandInterface from "../../entities/brand/interfaces/create-brand";
import { getConnection } from "typeorm";
import { Brand } from "../../entities/brand/brand.entity";

export class CreateBrandImplementation implements PostBrandInterface {
  add(item: Brand){
    return getConnection().manager.save(item)
  }
}

// Implement the concrete methods of the entity interfaces
