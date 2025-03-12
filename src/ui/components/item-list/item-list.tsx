
import React from "react";
import { ProductEntity } from "../../../domain";
import { priceFormatter } from "../../../core";
import * as style from "./style.module.css";

type Props = {
	product: ProductEntity;
	editQuantity: (product: ProductEntity, changes: number) => void;
}

export default function ItemList({ product, editQuantity }: Props) {

	const { code, name, category, price, offertPrice, quantity } = product;

	return (
		<div className={style.container}>
			<div className={style.bigDivisor}>
				<img src={`/assets/product-images/${product.code}.webp`} loading="lazy" alt={product.name} onError={({ currentTarget }) => {
            	    currentTarget.onerror = null;
            	    currentTarget.src= "/assets/images/no-image.webp";
            	}} />
				<div className={style.textDivisor}>
					<h3>
						{code} | {name}
					</h3>
					<p>{category}</p>
				</div>
			</div>
			<div className={style.smallDivisor}>
				<div className={style.priceBox}>
					{ offertPrice ? 
						(<p>{priceFormatter(offertPrice * quantity!)}</p>) : 
						(<p>{priceFormatter(price * quantity!)}</p>)
					}
				</div>
				<div className={style.buttonBox}>
					<div className={style.buttonContainer}>
						<button className={style.quantityBtn} onClick={() => editQuantity(product, -1)}>
							-
						</button>
						<p>{quantity}</p>
						<button className={style.quantityBtn} onClick={() => editQuantity(product, 1)}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}