import React from "react";
import * as style from "./style.module.css";

export default function Sellers() {
    return (
        <section className={style.container}>
            <div className={style.card}>
                <img src="/assets/icons/paid.svg" alt="Pagos" />
                <p>Efectivo / Transferencia</p>
            </div>
            <div className={style.card}>
                <img src="/assets/icons/shipping.svg" alt="Envios" />
                <p>Envíos a todo el país</p>
            </div>
            <div className={style.card}>
                <img src="/assets/icons/store.svg" alt="compra" />
                <p>Compra por encargo</p>
            </div>
        </section>
    )
}