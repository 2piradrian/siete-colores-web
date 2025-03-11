import React from "react";
import toast from "react-hot-toast";
import { Link } from "@gatsbyjs/reach-router";
import { ProductEntity } from "../../../domain";
import MainButton from "../main-button/main-button";
import * as style from "./style.module.css";

type Props = {
	products: ProductEntity[];
	getOrder: () => string;
}

export default function CartButtons({products, getOrder}: Props){
    
    return (
        <div className={style.container}>
			<div className={style.subcontainer}>
				<Link to="/productos">
					<MainButton isActive type="button">Más productos</MainButton>
				</Link>
				{products.length ? (
					<a
						href={getOrder()}
					>
						<MainButton isActive type="button">
							Solicitar al vendedor
						</MainButton>
					</a>
				) : (
					<a
						href="#"
						onClick={() => {
							toast("😬Tu carrito está vacio");
						}}>
						<MainButton isActive={false} type="button">
							Solicitar al vendedor
						</MainButton>
					</a>
				)}
			</div>
		</div>
    )
}