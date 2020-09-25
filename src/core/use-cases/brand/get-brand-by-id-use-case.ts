import { Brand } from "../../entities";
import GetBrandByIDInterface from "../../entities/brand/interfaces/get-brand-by-id";

export const getBrandByIdUseCaseFactory = ({
  getBrandByIdInterface,
}: {
  getBrandByIdInterface: GetBrandByIDInterface;
}) => async (input: Brand) => {
  return getBrandByIdInterface.getByID(input.id);
};
