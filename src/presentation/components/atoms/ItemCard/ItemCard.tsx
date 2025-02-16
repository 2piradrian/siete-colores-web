import { Link } from "react-router-dom";
import { useContext } from "react";
import { Product } from "../../../../domain/types/products";
import { CartContext } from "../../../../core";
import toast from "react-hot-toast";
import MainButton from "../MainButton/MainButton";
import noimage from "../../../assets/images/no-image.jpg";
import style from "./style.module.css";

function ItemCard({ code, name, price, offertPrice, size, category, available }: Product) {
	const { editQuantity } = useContext(CartContext);

	const item = {code, name, price, offertPrice, size, category, available};

	const handleAdd = () => {
		toast("🛒Producto agregado");
		editQuantity(item as Product, 1);
	};

	let image;
	try {
		image = `/product-images/${code}.jpg`;
	} catch {
		image = noimage;
	}

	return (
		<article className={style.box}>
			<Link to={`/details/${code}`} className={style.link}>
				<img src={image} alt={name} onError={({ currentTarget }) => {
            	    currentTarget.onerror = null;
            	    currentTarget.src= noimage;
            	}} />
			</Link>
			<div className={style.articleDescriptor}>
				<h3 className={style.title}>
					{code} | {name}
				</h3>
				<span>{available ? "" : "(Sin Stock)"}</span>
			</div>
			<p className={style.itemDesc} style={{ textAlign: "start" }}>
				{category}
			</p>
			<div className={style.priceContainer}>
				<div className={style.priceBox}>
				  	{offertPrice != undefined ? ( 
				  	  <>
				  	    <p className={style.oldPrice}>${price}</p>
				  	    <p className={style.price}>${offertPrice}</p>
				  	  </>
				  	) : (
				  	  <p className={style.price}>${price}</p>
				  	)}
				</div>
				<MainButton isActive={available} type="button" styles={style.addProduct} onClick={handleAdd}>
					Comprar
				</MainButton>
			</div>
		</article>
	);
}

export default ItemCard;
