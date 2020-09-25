export interface ListBrandsInterface<T> {
  listBrands(items: T[]): Promise<T>;
}
