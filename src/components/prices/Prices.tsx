import useOrder from "./../../hooks/useOrder";
import style from "./style.module.css";

function Prices() {
	const { subtotal } = useOrder();

	return (
		<div className="smallcontainer">
			<div className={style.subcontainer}>
				<div className={style.priceContainer}>
					<p className={style.title}>Subtotal</p>
					<p className={style.price}>${subtotal}</p>
				</div>
				<div className={style.priceContainer}>
					<p className={style.title}>Envio:</p>
					<p className={style.ship}>Solicitar al vendedor</p>
				</div>
				<hr />
				<div className={style.priceContainer}>
					<p className={style.title}>Total:</p>
					<p className={style.price}>$ {subtotal} + envio</p>
				</div>
			</div>
		</div>
	);
}

export default Prices;
