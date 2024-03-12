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

    useEffect(() => {
        console.log(products);
    }, [products]);

    const editQuantity = (product: Product, changes: number) => {
        const productIndex = products.findIndex((p) => p.id === product.id);

        if (productIndex === -1) {
            return setProducts([...products, { ...product, quantity: 1 }]);
        }

        const productCopy = products[productIndex];
        productCopy.quantity = productCopy.quantity! + changes;

        if (productCopy.quantity < 1) {
            return setProducts(products.filter((p) => p.id !== product.id));
        }

        const newProducts = [...products];
        newProducts[productIndex] = productCopy;

        return setProducts(newProducts);
    };

    return (
        <CartContext.Provider value={{ products, editQuantity }}>
            {children}
        </CartContext.Provider>
    );
};