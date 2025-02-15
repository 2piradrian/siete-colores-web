import { Filters } from "../types/filters";
import { PaginatedProducts } from "../types/paginated-products";
import { Product } from "../types/products";

export abstract class ProductsDataSourceI {
    abstract getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts>;
    abstract getProductByCode(code: string): Promise<Product>;
    abstract getNews(size: number): Promise<Product[]>;
    abstract getWithDiscount(size: number): Promise<Product[]>;
}