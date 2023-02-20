import style from "./style.module.css";

function Footer() {
	return (
		<footer className={`smallcontainer ${style.background}`}>
			<div className={style.separator} />
			<div className={style.subcontainer}>
				<div className={style.boxContent}>
					<h4 className={style.titles}>Métodos de pago:</h4>
					<p className={style.text}>Efectivo</p>
					<p className={style.text}>Transferencia</p>
					<p className={style.text}>Crédito o débito</p>
				</div>
				<div className={style.boxContent}>
					<h4 className={style.titles}>Envíos:</h4>
					<p className={style.text}>Andreani</p>
					<p className={style.text}>Retiro en local</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
