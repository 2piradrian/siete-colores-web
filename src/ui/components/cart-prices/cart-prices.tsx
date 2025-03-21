import React from "react";
import { priceFormatter } from "../../../core";
import * as style from "./style.module.css";

type Props = {
	subtotal: number;
};

export default function CartPrices({ subtotal }: Props) {

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