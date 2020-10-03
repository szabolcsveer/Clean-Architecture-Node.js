import { Brand } from "../brand.entity";

export default interface GetBrandByIDInterface {
  getByID(id: string): Promise<any>;
}
