import { CartDataSourceI, ProductEntity } from "../../../domain";

export class CartLocalStorageDataSource implements CartDataSourceI {

    constructor() {

    }

    public async getCart(): Promise<ProductEntity[]> {
        try {
            const cartJSON = localStorage.getItem('cart') || null;
            if (!cartJSON) return [];

            const cart = JSON.parse(cartJSON);

            if (!cart || !cart.createdAt || !cart.products) return [];

            if (new Date(cart.createdAt).getTime() + 1000 * 60 * 60 * 24 < Date.now()) {
                localStorage.removeItem('cart');
                return [];
            }

            const products = cart.products.sort((a: ProductEntity, b: ProductEntity) => {
                if (a.code < b.code) return -1;
                if (a.code > b.code) return 1;
                return 0;
            });

            return products;
        }
        catch (error) {
            throw new Error("Error obteniendo las subcategorias")
        }
    }

    public async editQuantity(product: ProductEntity, quantity: number): Promise<void> {
        const products = await this.getCart();
        const productIndex = products.findIndex((p) => p.code === product.code);

        if (productIndex === -1) {
            const cart = [...products, { ...product, quantity: 1 }];
            this.saveCartToLocalStorage(cart);

            return;
        }

        products[productIndex].quantity = products[productIndex].quantity! + quantity;

        if (products[productIndex].quantity < 1) {
            const cart = products.filter((p) => p.code !== product.code);
            this.saveCartToLocalStorage(cart);

            return;
        }

        const cart = [...products];
        cart[productIndex] = products[productIndex];

        return this.saveCartToLocalStorage(cart);
    }

    private async saveCartToLocalStorage(products: ProductEntity[]): Promise<void> {
        const cart = {
            createdAt: new Date(),
            products: products
        };

        localStorage.setItem('cart', JSON.stringify(cart));
    };

}