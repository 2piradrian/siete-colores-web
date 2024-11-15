import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../../core";
import ItemCard from "../../atoms/ItemCard/ItemCard";
import MainButton from "../../atoms/MainButton/MainButton";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import style from "./style.module.css";

export default function News() {
    const { loading, news } = useContext(ProductsContext);

    return (
        <section className={style.container}>
            <div className={style.subtitle}>
                <Subtitle subtitle="Novedades" />
            </div>
            {!loading ? <div className={style.products}>
                {news?.map((product, index) => (
                    <ItemCard key={index} {...product} />
                ))}
            </div> : <p>Cargando...</p>}
            <Link to="/products" className={style.button}>
                <MainButton isActive>
                    Ver más
                </MainButton>
            </Link>
        </section>
    )
}