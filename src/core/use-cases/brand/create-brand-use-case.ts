import { Brand, brandFactory } from "../../entities";
import PostBrandInterface from "../../entities/brand/interfaces/create-brand";

export const createBrandUseCaseFactory = ({
  postBrandInterface,
}: {
  postBrandInterface: PostBrandInterface;
}) => async (input: Brand) => {
  const brand = brandFactory({
    id: input.id,
    name: input.name,
    productTypes: input.productTypes,
    riders: input.riders,
  });

  return await postBrandInterface.add(brand);
};
