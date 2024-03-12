import NavItem from "../../atoms/NavItem/NavItem";
import cross from "../../../assets/icons/cross.svg";
import style from "./style.module.css";

type Props = {
	setClosed: Function;
	closed: boolean | undefined;
};

export default function Navbar({ setClosed, closed }: Props) {
	return (
		<div
			className={`${style.navBox} ${!closed ? style.navBoxActive : style.navBoxInactive}`}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<img src={cross} alt="burger icon" className={style.close} />
			<ul className={style.navList}>
				<NavItem href="/products" arialabel="Productos" title="Productos" />
				<NavItem href="/cart" arialabel="Carrito" title="Carrito" />
			</ul>
		</div>
	);
}