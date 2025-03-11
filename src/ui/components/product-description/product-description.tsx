import React from "react";
import { ProductEntity } from "../../../domain";
import { priceFormatter } from "../../../core";
import * as style from "./style.module.css";
import MainButton from "../main-button/main-button";
import ProductText from "../product-text/product-text";

type Props = {
    product: ProductEntity;
    addProduct: (product: ProductEntity) => void;
}

export default function ProductDescription({ product, addProduct }: Props) {

    return (
        <div className={style.container}>
            <article className={style.descriptionContainer}>
                <img src={`/assets/product-images/${product.code}.jpg`} loading="lazy" alt={product.name} onError={({ currentTarget }) => {
            	    currentTarget.onerror = null;
            	    currentTarget.src= "/assets/images/no-image.jpg";
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
                            {product.offertPrice ? ( 
				  	            <>
				  	              <p className={style.oldPrice}>{priceFormatter(product.price)}</p>
				  	              <p className={style.price}>{priceFormatter(product.offertPrice)}</p>
				  	            </>
				  	            ) : (
				  	              <p className={style.price}>{priceFormatter(product.price)}</p>
				  	            )}
                        </div>
                        <div className={style.buttonContainer}>
                            <MainButton isActive={product.available} type="button" styles={style.addProduct} onClick={() => addProduct(product)}>
						        Comprar
					        </MainButton>
				        </div>
                    </div>
                </div>
                <h2 className={style.subtitle}>Descripción</h2>
                <ProductText code={product.code} description={product.description} />
                <div className={style.buttonContainer}>
                    <MainButton isActive={product.available} type="button" styles={style.addProduct} onClick={() => addProduct(product)}>
				    	Comprar
				    </MainButton>
				</div>
            </article>
        </div>
    );
}