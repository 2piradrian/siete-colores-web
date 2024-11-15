import { Product } from "../types/products";

export abstract class ProductsRepositoryI {
    abstract getProducts(): Promise<Product[]>;
    abstract getProductByCode(code: string): Promise<Product>;
}