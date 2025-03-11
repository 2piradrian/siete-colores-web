import React from "react";
import { Link } from "@gatsbyjs/reach-router";
import { ProductEntity } from "../../../domain";
import ItemCard from "../item-card/item-card";
import MainButton from "../main-button/main-button";
import Subtitle from "../subtitle/subtitle";
import * as style from "./style.module.css";

type Props = {
    news: ProductEntity[];
    onAdd: (product: ProductEntity) => void;
};

export default function News({ news, onAdd }: Props) {

    return (
        <section className={style.container}>
            <div className={style.subtitle}>
                <Subtitle subtitle="Novedades" />
            </div>
            <div className={style.products}>
                {news.map((product, index) => (
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