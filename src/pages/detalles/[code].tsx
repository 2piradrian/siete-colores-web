import React from "react";
import useViewModel from "../../ui/viewmodels/detalles/useViewModel";
import ProductDescription from "../../ui/components/product-description/product-description";
import * as style from "./style.module.css";

export default function DetallesPage(){

    const { loading, product, addProduct } = useViewModel();

    return (
        <section className={style.container}>
            {loading && <p>Cargando...</p>}

            {!loading && product && (
                <ProductDescription product={product} addProduct={addProduct} />
            )}
        </section>
    );
}