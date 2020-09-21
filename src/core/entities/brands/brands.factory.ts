import { Brands } from "./brands.type";
import { uuid } from "uuidv4";

export const skateboardFactory = ({
  id = uuid(),
  name = "",
  productTypes = [],
  riders = [],
}): Brands => ({
  id,
  name,
  productTypes,
  riders,
});
