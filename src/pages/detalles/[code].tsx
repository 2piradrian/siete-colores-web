import React from "react";
import useViewModel from "../../ui/viewmodels/detalles/useViewModel";
import ProductDescription from "../../ui/components/product-description/product-description";
import { SEO } from "../../ui/components/seo/seo";
import * as style from "./style.module.css";

type Props = {
    pageContext: {
      static_product: any;
    };
};

export default function DetallesPage({ pageContext }: Props) {

    const { static_product } = pageContext;
    const { loading, product, addProduct } = useViewModel();

    return (
        <section className={style.container}>
            {loading && 
                <ProductDescription product={static_product} addProduct={addProduct} />
            }
            {!loading && product && (
                <ProductDescription product={product} addProduct={addProduct} />
            )}
        </section>
    );
}

export const Head = () => (
    <SEO />
);