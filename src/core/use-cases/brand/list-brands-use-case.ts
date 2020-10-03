import { ListBrandsInterface } from "../../entities/brand/interfaces/list-brands";

export const listBrandsUseCaseFactory = ({
  listBrandsInterface,
}: {
  listBrandsInterface: ListBrandsInterface<any>;
}) => async () => {
  return await listBrandsInterface.listBrands();
};
