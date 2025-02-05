import { Product } from "../../../../domain/types/products";
import ItemList from "../ItemList/ItemList";
import style from "./style.module.css";

type Props = {
	products: Product[];
	editQuantity: (product: Product, changes: number) => void;
};

export default function CartList({ products, editQuantity }: Props) {

	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.itemList}>
					{products.map((item: Product) => (
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