import { CartDataSourceI, CartRepositoryI, ProductEntity } from "../../domain";
import { CartLocalStorageDataSource } from "../data-source/local-storage/cart";

export class CartRepository implements CartRepositoryI {
    private dataSource: CartDataSourceI;

    constructor(dataSource: CartDataSourceI = new CartLocalStorageDataSource()){
        this.dataSource = dataSource;
    }

    public async getCart(): Promise<ProductEntity[]> {
        try {
            return await this.dataSource.getCart();
        }
        catch (error) {
            throw new Error("Error obteniendo el carrito");
        }
    }

    public async editQuantity(product: ProductEntity, quantity: number): Promise<void> {
        try {
            await this.dataSource.editQuantity(product, quantity);
        }
        catch (error) {
            throw new Error("Error editando la cantidad del producto");
        }
    }
    
}