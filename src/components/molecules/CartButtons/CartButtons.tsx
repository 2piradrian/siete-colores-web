import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import toast from "react-hot-toast";
import style from "./style.module.css";
import MainButton from "../../atoms/MainButton/MainButton";
import { Link } from "react-router-dom";

type Props = {
	products: Product[];
}

export default function CartButtons({products}: Props){
    
	const [order, setOrder] = useState("");

	useEffect(() => {
		setOrder(getOrder());
	}, [products]);

	const getOrder = () => {
		const text = `Hola, me gustaría consultar por los siguientes articulos
		${products?.map((products: Product) => {return `\n${products.name} (${products.code}) x (${products.quantity}un.)\n`}).join("")}`;
		return `https://api.whatsapp.com/send?phone=543512742036&text=${encodeURI(text)}`;
	};

    return (
        <div className={style.container}>
			<div className={style.subcontainer}>
				<Link to="/products">
					<MainButton isActive>Más productos</MainButton>
				</Link>
				{products.length ? (
					<a
						href={order}
						onClick={() => {
							localStorage.clear();
						}}>
						<MainButton isActive>
							Solicitar al vendedor
						</MainButton>
					</a>
				) : (
					<a
						href="#"
						onClick={() => {
							toast("😬Tu carrito está vacio");
						}}>
						<MainButton isActive={false}>
							Solicitar al vendedor
						</MainButton>
					</a>
				)}
			</div>
		</div>
    )
}