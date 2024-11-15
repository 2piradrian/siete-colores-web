import { useEffect, useState } from "react";
import { Product } from "../../../../domain/types/products";
import { Link } from "react-router-dom";
import useProducts from "../../../../core/hooks/useProducts";
import ItemCard from "../../atoms/ItemCard/ItemCard";
import MainButton from "../../atoms/MainButton/MainButton";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import style from "./style.module.css";

export default function News() {
    const { getRandomProducts, loading } = useProducts();
    const [randomProducts, setRandomProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (!loading) {
            const products = getRandomProducts(6);
            setRandomProducts(products);
        }
    }, [loading]);

    return (
        <section className={style.container}>
            <div className={style.subtitle}>
                <Subtitle subtitle="Novedades" />
            </div>
            <div className={style.products}>
                {randomProducts?.map((product, index) => (
                    <ItemCard key={index} {...product} />
                ))}
            </div>
            <Link to="/products" className={style.button}>
                <MainButton isActive>
                    Ver más
                </MainButton>
            </Link>
        </section>
    )
}