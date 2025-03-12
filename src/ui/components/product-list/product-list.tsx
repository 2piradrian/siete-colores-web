import React from "react";
import { ProductEntity } from "../../../domain";
import ItemCard from "../item-card/item-card";
import * as style from "./style.module.css";

type Props = {
    loading: boolean;
    list: ProductEntity[];
    onAdd: (product: ProductEntity) => void;
};

export default function ProductList({ loading, list, onAdd }: Props) {

    return (
        <section className={style.container}>
            <div className={style.subcontainer}>
				{list?.map((product: any) => (
					<ItemCard 
                        product={product} 
                        onAdd={onAdd} 
                        key={product.code} 
                    />
				))}
                {!loading && list?.length === 0 && 
                    <span className={style.message}>
                        No hay productos para mostrar 😓
                    </span>
                }
			</div>
        </section>
    );
}