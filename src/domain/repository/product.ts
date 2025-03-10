import { ProductEntity } from "../entity/product";
import { Filters } from "../type/filters";

export abstract class ProductsRepositoryI {
    abstract getProducts(filters: Filters): Promise<ProductEntity[]>;
    abstract getProductByCode(code: string): Promise<ProductEntity>;
    abstract getNews(size: number): Promise<ProductEntity[]>;
    abstract getWithDiscount(): Promise<ProductEntity[]>;
}