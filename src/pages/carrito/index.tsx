import React from "react";
import CartList from "../../ui/components/cart-list/CartList";
import useViewModel from "../../ui/viewmodels/carrito/useViewModel";
import CartPrices from "../../ui/components/cart-prices/cart-prices";
import CartButtons from "../../ui/components/cart-buttons/cart-buttons";
import { SEO } from "../../ui/components/seo/seo";
import { Toaster } from "react-hot-toast";
import * as style from "./style.module.css";

export default function CarritoPage(){

    const { products, editQuantity, subtotal, getOrder } = useViewModel();

    return (
        <section className={style.container}>
            <CartList products={products} editQuantity={editQuantity}/>
            <CartPrices subtotal={subtotal} />
            <CartButtons products={products} getOrder={getOrder} />
			<Toaster />
        </section>
    );
};

export const Head = () => (
    <SEO />
);