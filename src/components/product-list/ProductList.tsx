import { useEffect } from "react";
import { useSelector } from "react-redux";
import { product } from "../../types";
import useProducts from "./../../hooks/useProducts";
import useScroll from "./../../hooks/useScroll";

import ItemCard from "./../item-card/ItemCard";
import style from "./style.module.css";

function ProductList() {
	const { list, isLoading } = useScroll();
	const { refetch } = useProducts();
	const filters = useSelector((state: any) => state.products);

	useEffect(() => {
		refetch();
	}, [filters, refetch]);

	return (
		<section className="smallcontainer">
			<div className={style.subcontainer}>
				{list?.map((item: product) => (
					<ItemCard {...item} key={item.id} />
				))}
				{!list?.length && !isLoading && <p>Vaya, no hemos encontrado resultados</p>}
				{isLoading && <p>Cargando...</p>}
			</div>
		</section>
	);
}

export default ProductList;
