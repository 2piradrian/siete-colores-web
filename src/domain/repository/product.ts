import { ProductEntity } from "../entity/product";
import { Filters } from "../type/filters";
import { ProductsPage } from "../type/products-page";

export abstract class ProductsRepositoryI {
    abstract getProducts(page: number, size: number, filters: Filters): Promise<ProductsPage>;
    abstract getProductByCode(code: string): Promise<ProductEntity>;
    abstract getNews(size: number): Promise<ProductEntity[]>;
    abstract getWithDiscount(): Promise<ProductEntity[]>;
}