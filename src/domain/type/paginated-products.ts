import { ProductEntity } from "../entity/product";

export type PaginatedProducts = {
    products: ProductEntity[];
    page: number;
    pages: number;
};