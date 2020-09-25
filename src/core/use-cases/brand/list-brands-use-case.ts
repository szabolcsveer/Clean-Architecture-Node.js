import { Brand } from "../../entities";
import { ListBrandsInterface } from "../../entities/brand/interfaces/list-brands";

export const listBrandsUseCaseFactory = ({
  listBrandsInterface,
}: {
  listBrandsInterface: ListBrandsInterface<any>;
}) => async (input: Brand[]) => {
  return await listBrandsInterface.listBrands(input);
};
