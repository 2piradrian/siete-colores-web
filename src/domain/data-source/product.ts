import { ProductEntity } from "../entity/product";
import { ProductsPage } from "../type/products-page";
import { Filters } from "../type/filters";

export abstract class ProductsDataSourceI {
    abstract getProducts(page: number, size: number, filters: Filters): Promise<ProductsPage>;
    abstract getProductByCode(code: string): Promise<ProductEntity>;
    abstract getNews(size: number): Promise<ProductEntity[]>;
    abstract getWithDiscount(): Promise<ProductEntity[]>;
}