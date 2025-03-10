import React from "react";
import style from "./style.module.css";

export default function Footer() {
	return (
		<footer className={style.container}>
			<div className={style.subcontainer}>
				<img src="/assets/images/isologo.svg" alt="isologo" className={style.isologo}/>
				<div className={style.boxContent}>
					<h4 className={style.titles}>Métodos de pago:</h4>
					<p className={style.text}>Efectivo</p>
					<p className={style.text}>Transferencia</p>
				</div>
				<div className={style.boxContent}>
					<h4 className={style.titles}>¿Dónde encontrarnos?</h4>
					<p className={style.text}>Envíos a todo el país</p>
					<p className={style.text}>Córdoba, Argentina</p>
				</div>
				<div className={style.boxContent}>
					<h4 className={style.titles}>Contáctanos</h4>
					<p className={style.text}>sietecolores.3d@gmail.com</p>
					<p className={style.text}>sietecolores3d</p>
					<p className={style.text}>351 2742036</p>
				</div>
			</div>
		</footer>
	);
};