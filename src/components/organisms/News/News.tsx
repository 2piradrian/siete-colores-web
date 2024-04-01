import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import ItemCard from "../../atoms/ItemCard/ItemCard";
import MainButton from "../../atoms/MainButton/MainButton";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import style from "./style.module.css";

export default function News() {
    const { randomProducts } = useProducts();

    return (
        <section className={style.container}>
            <div className={style.subtitle}>
                <Subtitle subtitle="Novedades" />
            </div>
            <div className={style.products}>
                {randomProducts?.map((product) => (
                    <ItemCard key={product.id} {...product} />
                ))}
            </div>
            <Link href="/products" className={style.button}>
                <MainButton isActive>
                    Ver más
                </MainButton>
            </Link>
        </section>
    )
}