import { Brand } from "../brand.type";
export default interface PostBrandInterface {
  add(item: Brand): Promise<void>;
}
