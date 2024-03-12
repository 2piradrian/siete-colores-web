import { Product } from "../../../types/products";
import style from "./style.module.css";

import noimage from "../../../assets/images/no-image.jpg";

type Props = {
	product: Product;
	editQuantity: (product: Product, changes: number) => void;
}

export default function ItemList({ product, editQuantity }: Props) {

	const { id, name, type, price, quantity } = product;

	let image;
	try {
		image = require(`../../assets/products/${id}.jpg`);
	} catch {
		image = noimage;
	}

	return (
		<div className={style.container}>
			<div className={style.bigDivisor}>
				<img src={image} alt={name} />
				<div className={style.textDivisor}>
					<h3>
						{id} | {name}
					</h3>
					<p>{type}</p>
				</div>
			</div>
			<div className={style.smallDivisor}>
				<p>${Number(price * quantity!).toFixed(2)}</p>
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