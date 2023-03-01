import circles_illustration from "../../assets/misc/circles_illustration.svg";
import circles_illustrationdesk from "../../assets/misc/circles_illustrationdesk.svg";
import Titles from "../../components/titles/Titles";
import style from "./style.module.css";

function Caution() {
	return (
		<section className={`smallcontainer ${style.noscroll}`}>
			<Titles title="Leer con atención" subtitle="Antes de comprar" />
			<h1>Siete Colores</h1>
			<p>Recomienda:</p>
			<div className={style.container}>
				<p className={style.text}>Si no encontrás algún cortante envianos un mensaje.</p>
				<p className={style.text}>
					Los productos se deben <span>lavar a mano</span>, con agua fria o tibia. No son
					aptos para lavavajillas, no deben exponerse a altas temperaturas.
				</p>
				<p className={style.text}>
					Prestar atención al lavado puesto que algunas piezas tienen detalles que pueden
					llegar a romperse.
				</p>
				<p className={style.text}>Secar muy bien antes de guardar</p>
				<p className={style.text}>
					<span>No contamos</span> con stock del producto para
					<span> entrega inmediata.</span> Nuestros productos se fabrican
					<span> bajo pedido.</span>
				</p>
				<p className={style.text}>
					Los tiempos estimados de fabricación son de <span> 6 a 10 días</span>.
				</p>
				<p className={style.text}>Precios exclusivos para compras por mayor.</p>
				<p className={style.text}>
					Tu consulta no molesta, gracias por visitar nuestra página.
				</p>
			</div>
			<img
				className={style.decoration}
				src={window.innerWidth > 900 ? circles_illustrationdesk : circles_illustration}
				alt="imagen de decoración"
			/>
		</section>
	);
}

export default Caution;
