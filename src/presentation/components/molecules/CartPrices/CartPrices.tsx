import { priceFormatter } from "../../../../core";
import { Product } from "../../../../domain/types/products";
import style from "./style.module.css";
import { useEffect, useState } from "react";

type Props = {
	products: Product[];
};

export default function CartPrices({ products }: Props) {
	const [subtotal, setSubtotal] = useState(0);

	useEffect(() => {
		const price = products.reduce((acc, product) => {
			const finalPrice = product.offertPrice || product.price;
			return acc + finalPrice * product.quantity!
		}, 0) || 0;
		setSubtotal(price);
	}, [products]);

	return (
		<div className={style.container}>
			<div className={style.subcontainer}>
				<div className={style.priceContainer}>
					<p className={style.title}>Subtotal</p>
					<p className={style.price}>{priceFormatter(subtotal)}</p>
				</div>
				<div className={style.priceContainer}>
					<p className={style.title}>Envio:</p>
					<p className={style.ship}>Solicitar al vendedor</p>
				</div>
				<hr />
				<div className={style.priceContainer}>
					<p className={style.title}>Total:</p>
					<p className={style.price}>{priceFormatter(subtotal)} + envio</p>
				</div>
			</div>
		</div>
	);
}