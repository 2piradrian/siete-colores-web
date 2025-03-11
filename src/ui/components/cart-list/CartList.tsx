import React from "react";
import { ProductEntity } from "../../../domain";
import ItemList from "../item-list/item-list";
import * as style from "./style.module.css";

type Props = {
	products: ProductEntity[];
	editQuantity: (product: ProductEntity, changes: number) => void;
};

export default function CartList({ products, editQuantity }: Props) {

	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.itemList}>
					{products.map((item: ProductEntity) => (
						<ItemList product={item} editQuantity={editQuantity} key={item.code} />
					))}
					{products.length === 0 && (
						<p className={style.noItems}>
							Vaya, tu carrito está vacio
						</p>
					)}
				</div>
			</div>
		</div>
	);
}