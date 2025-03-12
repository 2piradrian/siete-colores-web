import React from "react";
import { Link } from "gatsby";
import { ProductEntity } from "../../../domain";
import { priceFormatter } from "../../../core";
import MainButton from "../main-button/main-button";
import * as style from "./style.module.css";

type Props = {
	product: ProductEntity;
	onAdd: (product: ProductEntity) => void;
};

export default function ItemCard({ product, onAdd }: Props) {

	return (
		<article className={style.box}>
			<Link to={`/detalles/${product.code}`}>
				<img src={`/assets/product-images/${product.code}.webp`} loading="lazy" alt={product.name} onError={({ currentTarget }) => {
            	    currentTarget.onerror = null;
            	    currentTarget.src= "/assets/images/no-image.webp";
            	}} />
			</Link>
			<div className={style.articleDescriptor}>
				<h3 className={style.title}>
					{product.code} | {product.name}
				</h3>
				<span>{product.available ? "" : "(Sin Stock)"}</span>
			</div>
			<p className={style.itemDesc} style={{ textAlign: "start" }}>
				{product.category}
			</p>
			<div className={style.priceContainer}>
				<div className={style.priceBox}>
				  	{product.offertPrice != undefined ? ( 
				  	  <>
				  	    <p className={style.oldPrice}>{priceFormatter(product.price)}</p>
				  	    <p className={style.price}>{priceFormatter(product.offertPrice)}</p>
				  	  </>
				  	) : (
				  	  <p className={style.price}>{priceFormatter(product.price)}</p>
				  	)}
				</div>
				<MainButton isActive={product.available} type="button" styles={style.addProduct} onClick={() => onAdd(product)}>
					Comprar
				</MainButton>
			</div>
		</article>
	);

};