import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import toast from "react-hot-toast";
import style from "./style.module.css";
import MainButton from "../../atoms/MainButton/MainButton";

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
		${products?.map((products: Product) => {return `\n${products.name} (${products.id}) x (${products.quantity}un.)\n`}).join("")}`;
		return `https://api.whatsapp.com/send?phone=543512742036&text=${encodeURI(text)}`;
	};

    return (
        <div className={style.container}>
			<div className={style.subcontainer}>
				<a href="/products">
					<MainButton isActive>Más productos</MainButton>
				</a>
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