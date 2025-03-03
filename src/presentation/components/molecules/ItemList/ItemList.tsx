import { Product } from "../../../../domain/types/products";
import style from "./style.module.css";

import noimage from "../../../assets/images/no-image.jpg";
import { priceFormatter } from "../../../../core";

type Props = {
	product: Product;
	editQuantity: (product: Product, changes: number) => void;
}

export default function ItemList({ product, editQuantity }: Props) {

	const { code, name, category, price, offertPrice, quantity } = product;

	let image;
	try {
		image = `/product-images/${code}.jpg`;
	} catch {
		image = noimage;
	}

	return (
		<div className={style.container}>
			<div className={style.bigDivisor}>
				<img src={image} alt={name} onError={({ currentTarget }) => {
                	currentTarget.onerror = null;
                	currentTarget.src= noimage;
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