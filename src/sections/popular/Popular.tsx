import Titles from "../../components/titles/Titles";
import useProducts from "./../../hooks/useProducts";

import { Link } from "react-router-dom";
import Button from "./../../components/button/Button";
import ItemCard from "./../../components/item-card/ItemCard";
import style from "./style.module.css";

function Popular() {
	const { products, isLoading } = useProducts(true);
	return (
		<div className="smallcontainer" id="popular">
			<Titles title="Lo más destacado" subtitle="¿Qué es lo qué está de moda?" />
			<div className={style.subcontainer}>
				<div className={style.itemContainer}>
					{!isLoading &&
						products?.map((item: any) => {
							return <ItemCard {...item} key={item.id} />;
						})}
				</div>
				<Link to="/products">
					<Button isActive styles={style.button}>
						Ver todos los productos
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Popular;
