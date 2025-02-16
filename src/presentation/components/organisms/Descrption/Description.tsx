import { Product } from "../../../../domain/types/products";
import { useContext } from "react";
import { CartContext } from "../../../../core";
import MainButton from "../../atoms/MainButton/MainButton";
import noimage from "../../../assets/images/no-image.jpg";
import toast from "react-hot-toast";
import ProductDescription from "../../atoms/ProductDescription/ProductDescription";
import style from "./style.module.css";

type Props = {
    product: Product;
}

export default function Description({ product }: Props) {

    const { editQuantity } = useContext(CartContext);

	const handleAdd = () => {
		toast("🛒Producto agregado");
		editQuantity(product as Product, 1);
	};
    
    let image;
	try {
		image = `/product-images/${product.code}.jpg`;
	} catch {
		image = noimage;
	}

    console.log(product);

    return (
        <section className={style.container}>
            <article className={style.descriptionContainer}>
                <img src={image} alt={product.name} onError={({ currentTarget }) => {
            	    currentTarget.onerror = null;
            	    currentTarget.src= noimage;
            	}} />
                <div className={style.textContainer}>
                    <h1 className={style.title}>{product.name}</h1>
                    {!product.available ? <span className={style.stock}>{"(Sin Stock)"}</span> : null }
                    <h2 className={style.subtitle}>Categoría</h2>
                    <p className={style.text}>{product.category}</p>
                    <h2 className={style.subtitle}>Dimensiones</h2>
                    <p className={style.text}>{product.size}</p>
                    <div className={style.buyContainer}>
                        <div className={style.priceContainer}>
                            <h2 className={style.subtitle}>Precio</h2>
                            <p className={style.text}>${product.price}</p>
                        </div>
                        <div className={style.buttonContainer}>
					        <MainButton isActive={product.available} type="button" styles={style.addProduct} onClick={handleAdd}>
						        Comprar
					        </MainButton>
				        </div>
                    </div>
                </div>
                <h2 className={style.subtitle}>Descripción</h2>
                <ProductDescription code={product.code} description={product.description} />
                <div className={style.buttonContainer}>
					<MainButton isActive={product.available} styles={style.addProduct} onClick={handleAdd} type="button">
                        Comprar
					</MainButton>
				</div>
            </article>
        </section>
    );
}