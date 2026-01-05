import React from "react";
import { priceFormatter } from "../../../core";
import * as style from "./style.module.css";

type Props = {
	subtotal: number;
	shippingCost: number;
	selectedShipping: string;
	setSelectedShipping: (value: string) => void;
	total: number;
};

export default function CartPrices({ subtotal, shippingCost, selectedShipping, setSelectedShipping, total }: Props) {

	return (
		<div className={style.container}>
			<div className={style.subcontainer}>
				<div className={style.priceContainer}>
					<p className={style.title}>Subtotal</p>
					<p className={style.price}>{priceFormatter(subtotal)}</p>
				</div>
				<div className={style.priceContainer}>
					<div className={style.selector}>
						<label htmlFor="shipping">Tipo de envío:</label>
						<select
							name="shipping"
							value={selectedShipping}
							onChange={(e) => setSelectedShipping(e.target.value)}
							className={style.select}
						>
							<option value="none">A convenir</option>
							<option value="branch">Envío a sucursal</option>
							<option value="home">Envío a domicilio</option>
						</select>
					</div>
					<p className={style.ship}>{shippingCost > 0 ? priceFormatter(shippingCost) : "A convenir"}</p>
				</div>
				<hr />
				<div className={style.priceContainer}>
					<p className={style.title}>Total:</p>
					<p className={style.price}>{priceFormatter(total)}</p>
				</div>
			</div>
		</div>
	);
}