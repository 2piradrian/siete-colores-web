import React from "react";
import { Toaster } from "react-hot-toast";
import CartButtons from "../../ui/components/cart-buttons/cart-buttons";
import CartList from "../../ui/components/cart-list/CartList";
import CartPrices from "../../ui/components/cart-prices/cart-prices";
import { SEO } from "../../ui/components/seo/seo";
import useViewModel from "../../ui/viewmodels/carrito/useViewModel";
import * as style from "./style.module.css";

export default function CarritoPage() {

    const { products, editQuantity, subtotal, getOrder, selectedShipping, setSelectedShipping, shippingCost, total } = useViewModel();

    return (
        <section className={style.container}>
            <CartList products={products} editQuantity={editQuantity} />
            <CartPrices
                subtotal={subtotal}
                shippingCost={shippingCost}
                selectedShipping={selectedShipping}
                setSelectedShipping={setSelectedShipping}
                total={total}
            />
            <CartButtons products={products} getOrder={getOrder} />
            <Toaster />
        </section>
    );
};

export const Head = () => (
    <SEO />
);