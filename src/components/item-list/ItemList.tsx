import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { delete_item } from "../../redux/actions/creators";
import { product } from "../../types";
import { update_item } from "./../../redux/actions/creators";
import style from "./style.module.css";

function ItemList({ name, id, quantity, price, type }: product) {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: any) => state.cart);

	const editQuantity = (number: number) => {
		const item = cartItems.filter((item: product) => item.id === id);

		const updatedItem = { ...item[0], quantity: item[0].quantity + number };

		if (updatedItem.quantity < 1) {
			dispatch(delete_item(item));
			toast("😒Producto eliminado");
			return;
		}

		dispatch(update_item(updatedItem));
	};

	return (
		<div className={style.container}>
			<div className={style.bigDivisor}>
				<img src={`./ProductsImg/${id}.jpg`} alt={name} />
				<div className={style.textDivisor}>
					<h3>
						{id} | {name}
					</h3>
					<p>{type}</p>
				</div>
			</div>

			<div className={style.smallDivisor}>
				<p>${Number(price * quantity!)}</p>
				<div className={style.buttonBox}>
					<div className={style.buttonContainer}>
						<button className={style.quantityBtn} onClick={() => editQuantity(-1)}>
							-
						</button>
						<p>{quantity}</p>
						<button className={style.quantityBtn} onClick={() => editQuantity(1)}>
							+
						</button>
					</div>
				</div>
			</div>
			<Toaster />
		</div>
	);
}

export default ItemList;
