import { Brand } from "../brand.type";

export default interface GetBrandByIDInterface {
  getByID(id: string): Promise<any>;
}
