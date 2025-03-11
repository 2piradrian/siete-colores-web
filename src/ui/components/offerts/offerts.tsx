import React from "react";
import { Link } from "gatsby";
import { ProductEntity } from "../../../domain";
import ItemCard from "../item-card/item-card";
import MainButton from "../main-button/main-button";
import Subtitle from "../subtitle/subtitle";
import * as style from "./style.module.css";

type Props = {
    offerts: ProductEntity[];
    onAdd: (product: ProductEntity) => void;
};

export default function Offerts({ offerts, onAdd }: Props) {

    return (
        <section className={style.container}>
            <div className={style.subtitle}>
                <Subtitle subtitle="En oferta" />
            </div>
            <div className={style.products}>
                {offerts.map((product, index) => (
                    <ItemCard key={index} product={product} onAdd={onAdd} />
                ))}
            </div> 
            <Link to="/productos" className={style.button}>
                <MainButton isActive type="button">
                    Ver más
                </MainButton>
            </Link>
        </section>
    )
}