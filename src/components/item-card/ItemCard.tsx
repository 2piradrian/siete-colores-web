import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { product } from "../../types";

import { add_item } from "./../../redux/actions/creators";
import Button from "./../button/Button";
import ItemModal from "./../item-modal/ItemModal";
import style from "./style.module.css";

function ItemCard({ id, name, price, tamaprox, type, popular, weight, description }: product) {
	const [modal, setModal] = useState<boolean>(false);
	const cart = useSelector((state: any) => state.cart);
	const dispatch = useDispatch();

	const item = {
		id,
		name,
		price,
		tamaprox,
		type,
		popular,
		weight,
		description,
	};

	const handleAdd = () => {
		toast("🛒Producto agregado");
		if (cart.some((cart: any) => cart.id === id)) return;
		dispatch(add_item(item));
	};

	return (
		<div className={style.box}>
			<img
				src={`./ProductsImg/${id}.jpg`}
				alt={name}
				onClick={() => setModal(!modal)}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = "https://drukasia.com/images/stripes/monk3.jpg";
				}}
			/>
			<h3 className={style.title}>
				{id} | {name}
			</h3>
			<div className={style.descBox}>
				<p className={style.itemDesc} style={{ textAlign: "start" }}>
					{type}
				</p>
				<p className={style.itemDesc} style={{ textAlign: "end" }}>
					{tamaprox}
				</p>
			</div>
			<div className={style.priceContainer}>
				<p className={style.price}>$ {price}</p>
				<div onClick={handleAdd}>
					<Button isActive styles={style.addProduct}>
						Agregar
					</Button>
				</div>
			</div>
			{modal && (
				<ItemModal handleView={() => setModal(!modal)} handleAdd={handleAdd} item={item} />
			)}
			<Toaster />
		</div>
	);
}

export default ItemCard;
