import { ProductEntity } from "../entity/product";

export abstract class CartRepositoryI {
    abstract getCart(): Promise<ProductEntity[]>;
    abstract editQuantity(product: ProductEntity, quantity: number): Promise<void>;
}