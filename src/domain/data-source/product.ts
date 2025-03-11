import { ProductEntity } from "../entity/product";
import { PaginatedProducts } from "../type/paginated-products";
import { Filters } from "../type/filters";

export abstract class ProductsDataSourceI {
    abstract getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts>;
    abstract getProductByCode(code: string): Promise<ProductEntity>;
    abstract getNews(size: number): Promise<ProductEntity[]>;
    abstract getWithDiscount(): Promise<ProductEntity[]>;
}