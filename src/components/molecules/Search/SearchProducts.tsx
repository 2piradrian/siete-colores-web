import { Dispatch, SetStateAction, useRef } from "react";
import { Filters } from "../../../types/filters";
import useCategories from "../../../hooks/useCategories";
import style from "./style.module.css";

export default function SearchProducts({ setFilters }: { setFilters: Dispatch<SetStateAction<Filters>> }) {

	const { categories } = useCategories();

	const name = useRef<any>();
	const category = useRef<any>();
	const order = useRef<any>();

	const handleChange = () => {
		const formData: Filters = {
			category: category.current.value,
			words: name.current.value,
			sort: order.current.value === "Menor Precio" ? "lowest" : order.current.value === "Mayor Precio" ? "highest" : "default",
		}
		 
		setFilters((prevFilters) => ({ ...prevFilters, ...formData }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	return (
		<div className={style.container}>
			<form className={style.form} onChange={handleChange} onSubmit={handleSubmit}>
				<input type="text" placeholder="Buscar por nombre" name="name" ref={name} />
				<div className={style.selector}>
					<select name="type" className={style.select} ref={category}>
						<option>Todos</option>
						{categories.map((category) => (
							<option key={category}>{category}</option>
						))}
					</select>
					<select name="order" className={style.select} ref={order}>
						<option>Sin orden</option>
						<option>Menor Precio</option>
						<option>Mayor Precio</option>
					</select>
				</div>
			</form>
		</div>
	);
}
