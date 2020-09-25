import { Brand } from "./brand.type";
import { uuid } from "uuidv4";

export const brandFactory = ({
  id = uuid(),
  name = "",
  productTypes = [""],
  riders = [""],
}): Brand => ({
  id,
  name,
  productTypes,
  riders,
});
