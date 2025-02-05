import { Product } from "../../../../domain/types/products";
import ItemCard from "../../atoms/ItemCard/ItemCard";
import style from "./style.module.css";

export default function ProductList({ list }: { list: Product[] }) {

    return (
        <section>
            <div className={style.subcontainer}>
				{list?.map((item: any) => (
					<ItemCard {...item} key={item.code} />
				))}
                {
                    list.length === 0 && <span className={style.message}>No hay productos para mostrar 😓</span>
                }
			</div>
        </section>
    );
}