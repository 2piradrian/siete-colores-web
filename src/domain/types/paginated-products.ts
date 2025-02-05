import { Product } from "./products";

export type PaginatedProducts = {
    products: Product[];
    page: number;
    pages: number;
};