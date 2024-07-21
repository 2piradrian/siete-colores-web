import React, { createContext, useEffect, useState } from 'react';
import { Product } from '../types/products';

type CartContextType = {
    products: Product[];
    editQuantity: (product: Product, changes: number) => void;
};

export const CartContext = createContext<CartContextType>({
    products: [],
    editQuantity: () => {},
});

type CartProviderProps = {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        getCartFromLocalStorage();
    }, []);

    useEffect(() => {
        if (firstLoad) { // prevent from saving empty cart to local storage on first load
            return setFirstLoad(false);
        }

        const productsList = products;
        productsList.sort((a, b) => {
            if (a.code < b.code) return -1;
            if (a.code > b.code) return 1;
            return 0;
        });
        saveCartToLocalStorage(productsList);
        setProducts(productsList);
    }, [products.length]);

    const editQuantity = (product: Product, changes: number) => {
        const productIndex = products.findIndex((p) => p.code === product.code);

        if (productIndex === -1) {
            return setProducts([...products, { ...product, quantity: 1 }]);
        }

        const productCopy = products[productIndex];
        productCopy.quantity = productCopy.quantity! + changes;

        if (productCopy.quantity < 1) {
            return setProducts(products.filter((p) => p.code !== product.code));
        }

        const newProducts = [...products];
        newProducts[productIndex] = productCopy;

        setProducts(newProducts);
        saveCartToLocalStorage(newProducts); 
    };

    const getCartFromLocalStorage = () => {
        const cart = localStorage.getItem('cart') || null;
        if (!cart) {
            return setProducts([]);
        }
        const parsedCart = JSON.parse(cart!);
        if (!parsedCart?.products || !parsedCart?.createdAt) {
            return setProducts([]);
        }
        // if cart is older than 24 hours, clear it
        if (new Date(parsedCart.createdAt).getTime() + 24 * 60 * 60 * 1000 < new Date().getTime()) {
            return setProducts([]);
        }
        else {
            return setProducts(parsedCart.products);
        }
    };

    const saveCartToLocalStorage = (newProducts: Product[]) => {
        localStorage.setItem('cart', JSON.stringify({products: newProducts, createdAt: new Date()}));
    };

    return (
        <CartContext.Provider value={{ products, editQuantity }}>
            {children}
        </CartContext.Provider>
    );
};