import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

import style from "./style.module.css";

type Props = {
	setClosed: Function;
};

function Navbar({ setClosed }: Props) {
	return (
		<div
			className={style.navBox}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<AiOutlineClose className={style.close} />

			<ul className={style.navList}>
				<li className={style.navRoutes}>
					<Link to="/home" aria-label="Ir a la página de inicio.">
						Inicio
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/products" aria-label="Ir a productos">
						Productos
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link
						to="/home#popular"
						aria-label="Ir a productos populares">
						Destacados
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/home#contact" aria-label="Ir a contacto">
						Contacto
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
