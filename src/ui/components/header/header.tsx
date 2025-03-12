import React from "react";
import * as style from "./style.module.css"
import { Link } from "gatsby";

type Props = {
	categories: string[];
	categorySelected: string;
};

export default function Header({ categories, categorySelected }: Props) {

    return (
        <header className={style.header}>
            <div className={style.container}>
				<Link to="/" >
                	<img src="/assets/icons/isotipo.svg" alt="isotipo" className={style.isotype}/>
				</Link>
				<div className={style.linkContainer}>
					<Link to="/carrito">
						<img src="/assets/icons/cart.svg" alt="carrito" className={style.cart}/>
					</Link>
					<Link to="/productos">
						<img src="/assets/icons/search.svg" alt="buscar" className={style.search}/>
					</Link>
				</div>
            </div>
			<div className={style.categoriesContainer}>
				<nav className={style.categories}>
					<Link to={'/productos'} className={style.category}>Todos</Link>
					{categories.map((category, index) => (
						<Link 
							to={`/productos/${category.toLowerCase()}`} 
							key={index} 
							className={(categorySelected === category.toLowerCase()) ? style.categorySelected : style.category}
						>
							{category}
						</Link>
					))}
				</nav>
			</div>
        </header>
    );
}