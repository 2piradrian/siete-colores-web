import { Link, useParams } from "react-router-dom";
import iso from "../../../assets/icons/isotipo.svg";
import cart from "../../../assets/icons/cart.svg";
import search from "../../../assets/icons/search.svg";
import style from "./style.module.css"
import useCategories from "../../../../hooks/useCategories";

export default function Header() {

	const {categories} = useCategories();
	const params = useParams<{category: string}>();

    return (
        <header className={style.header}>
            <div className={style.container}>
				<Link to="/" >
                	<img src={iso} alt="isotipo" className={style.isotype}/>
				</Link>
				<div className={style.linkContainer}>
					<Link to="/cart" className={style.link}>
						<img src={cart} alt="cart" className={style.cart}/>
					</Link>
					<Link to="/products" className={style.link}>
						<img src={search} alt="search" className={style.search}/>
					</Link>
				</div>
            </div>
			<div className={style.categoriesContainer}>
				<nav className={style.categories}>
					<Link to={'/products'} className={style.category}>Todos</Link>
					{categories.map((category, index) => (
						<Link 
							to={`/products/${category.toLowerCase()}`} 
							key={index} 
							className={(params.category === category.toLowerCase()) ? style.categorySelected : style.category}
						>
							{category}
						</Link>
					))}
				</nav>
			</div>
        </header>
    );
}