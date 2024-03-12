import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Product } from "../../../types/products";
import toast, { Toaster } from "react-hot-toast";
import MainButton from "../MainButton/MainButton";

import noimage from "../../../assets/images/no-image.jpg";
import style from "./style.module.css";

function ItemCard({ id, name, price, size, type, weight }: Product) {
	const { products, editQuantity } = useContext(CartContext);

	const item = {id, name, price, size, type, weight};

	const handleAdd = () => {
		toast("🛒Producto agregado");
		if (products.some((cart: any) => cart.id === id)) return;
		editQuantity(item as Product, 1);
	};

	let image;
	try {
		image = require(`../../assets/products/${id}.jpg`);
	} catch {
		image = noimage;
	}

	return (
		<div className={style.box}>
			<img src={image} alt={name} />
			<h3 className={style.title}>
				{id} | {name}
			</h3>
			<div className={style.descBox}>
				<p className={style.itemDesc} style={{ textAlign: "start" }}>
					{type}
				</p>
				<p className={style.itemDesc} style={{ textAlign: "end" }}>
					{size}
				</p>
			</div>
			<div className={style.priceContainer}>
				<p className={style.price}>$ {price.toFixed(2)}</p>
				<div onClick={handleAdd}>
					<MainButton isActive styles={style.addProduct}>
						Agregar
					</MainButton>
				</div>
			</div>
			<Toaster />
		</div>
	);
}

export default ItemCard;
