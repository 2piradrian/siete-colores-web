import { ProductEntity } from "../entity/product";

export type ProductsPage = {
    products: ProductEntity[];
    page: number;
    pages: number;
};