import { Product } from "../types/products";

export abstract class ProductsDataSourceI {
    abstract getProducts(): Promise<Product[]>;
    abstract getProductByCode(code: string): Promise<Product>;
}