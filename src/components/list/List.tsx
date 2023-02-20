import { useSelector } from "react-redux";
import { product } from "../../types";

import ItemList from "./../item-list/ItemList";
import Titles from "./../titles/Titles";
import style from "./style.module.css";

function List() {
	const cartItems = useSelector((state: any) => state.cart);

	return (
		<div className="smallcontainer">
			<div className={style.content}>
				<Titles title="Tus productos" subtitle="" />
				<div className={style.itemList}>
					{cartItems.map((item: product) => (
						<ItemList {...item} key={item.id} />
					))}
					{cartItems.length === 0 && (
						<p style={{ alignSelf: "center", margin: "10%" }}>
							Vaya, tu carrito está vacio
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default List;
