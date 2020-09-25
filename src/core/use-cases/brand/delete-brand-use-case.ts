import { Brand } from "../../entities";
import { DeleteBrandInterface } from "../../entities/brand/interfaces/delete-brands";

export const deleteBrandUseCaseFactory = ({
  deleteBrandInterface,
}: {
  deleteBrandInterface: DeleteBrandInterface;
}) => async (input: Brand) => {
  return await deleteBrandInterface.removeByID(input.id);
};
