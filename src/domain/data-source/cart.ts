import { ProductEntity } from "../entity/product";

export abstract class CartDataSourceI {
    abstract getCart(): Promise<ProductEntity[]>;
    abstract editQuantity(product: ProductEntity, quantity: number): Promise<void>;
}