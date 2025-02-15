import { useContext } from "react";
import { ProductsContext } from "../../../../core";
import ItemCard from "../../atoms/ItemCard/ItemCard";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import style from "./style.module.css";

export default function WithDiscount() {
    const { loading, withDiscount } = useContext(ProductsContext);

    return (
        <>
            { (!loading && withDiscount.length > 0) ? 
                <section className={style.container}>
                    <div className={style.subtitle}>
                        <Subtitle subtitle="Con descuento" />
                    </div>
                    <div className={style.products}>
                        {withDiscount?.map((product, index) => (
                            <ItemCard key={index} {...product} />
                        ))}
                    </div>
                </section> 
                : <p>Cargando...</p>
            }
        </>
    )
}