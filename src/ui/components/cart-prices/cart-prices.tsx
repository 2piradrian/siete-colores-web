import React from "react";
import { priceFormatter } from "../../../core";
import { PriceCalculator } from "../../../core/utils/PriceCalculator";
import * as style from "./style.module.css";

type Props = {
	subtotal: number;
	shippingCost: number;
	selectedShipping: string;
	setSelectedShipping: (value: string) => void;
	paymentMethod: string;
	setPaymentMethod: (value: string) => void;
	total: number;
};

export default function CartPrices({ subtotal, shippingCost, selectedShipping, setSelectedShipping, paymentMethod, setPaymentMethod, total }: Props) {
	const finalSubtotal = paymentMethod === "transfer" ? PriceCalculator.calculateTransferPrice(subtotal) : subtotal;
	const finalTotal = finalSubtotal + shippingCost;

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
				<div className={style.priceContainer}>
					<div className={style.selector}>
						<label htmlFor="payment">Forma de pago:</label>
						<select
							name="payment"
							value={paymentMethod}
							onChange={(e) => setPaymentMethod(e.target.value)}
							className={style.select}
						>
							<option value="transfer">Transferencia</option>
							<option value="cash">Efectivo</option>
							<option value="debit">Débito</option>
							<option value="credit">Crédito</option>
						</select>
					</div>
				</div>
				<hr />
				<div className={style.priceContainer}>
					<p className={style.title}>Total:</p>
					<p className={style.price}>{priceFormatter(finalTotal)}</p>
				</div>
				{paymentMethod === "transfer" && (
					<div className={style.transferContainer}>
						<p className={style.transferLegend}>
							Total con {PriceCalculator.TRANSFER_DISCOUNT_PERCENTAGE}% off por transferencia aplicado al subtotal
						</p>
					</div>
				)}
				{paymentMethod === "credit" && (
					<div className={style.transferContainer}>
						<p className={style.infoLegend}>
							El pago con tarjeta de crédito puede tener recargos o intereses.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}