import { useSelector } from "react-redux";
import useOrder from "./../../hooks/useOrder";

import { toast, Toaster } from "react-hot-toast";
import { BsWhatsapp } from "react-icons/bs";
import Button from "./../button/Button";

import { Link } from "react-router-dom";
import style from "./style.module.css";

function ButtonRouter() {
	const cartItems = useSelector((state: any) => state.cart);

	const { order } = useOrder();

	return (
		<div className="smallcontainer">
			<div className={style.subcontainer}>
				{cartItems.length ? (
					<a
						href={order}
						onClick={() => {
							localStorage.clear();
						}}>
						<Button isActive>
							<BsWhatsapp />
							Solicitar al vendedor
						</Button>
					</a>
				) : (
					<a
						href="#"
						onClick={() => {
							toast("😬Tu carrito está vacio");
						}}>
						<Button isActive={false}>
							<BsWhatsapp />
							Solicitar al vendedor
						</Button>
					</a>
				)}
				<Link to="/products">
					<Button isActive>Más productos</Button>
				</Link>
			</div>
			<Toaster />
		</div>
	);
}

export default ButtonRouter;
