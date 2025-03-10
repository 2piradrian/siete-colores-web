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
					<Link to="/cart">
						<img src="/assets/icons/cart.svg" alt="cart" className={style.cart}/>
					</Link>
					<Link to="/products">
						<img src="/assets/icons/search.svg" alt="search" className={style.search}/>
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