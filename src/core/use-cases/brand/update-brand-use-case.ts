import { Brand } from "../../entities";
import { UpdateBrandInterface } from "../../entities/brand/interfaces/update-brand";

export const updateBrandUseCaseFactory = ({
  updateBrandInterface,
}: {
  updateBrandInterface: UpdateBrandInterface;
}) => async (input: Brand) => {
  const { id, name, productTypes, riders } = input;
  return updateBrandInterface.updateBrandByID(id, {name: name, productTypes: productTypes, riders: riders});
};
