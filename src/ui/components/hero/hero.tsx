import React from "react"
import * as style from "./style.module.css"

export default function Hero() {
    return (
        <section className={style.container}>
            <div className={style.subcontainer}>
                <h1 className={style.title}>Siete Colores</h1>
                <img src="/assets/images/portada.webp" alt="" className={style.image}/>
            </div>
        </section>
    );
};