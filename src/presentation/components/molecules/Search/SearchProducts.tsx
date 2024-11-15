import { useRef } from "react";
import { Filters } from "../../../../domain/types/filters";
import style from "./style.module.css";
import MainButton from "../../atoms/MainButton/MainButton";

type Props = {
	setFilters: (newFilters: Partial<Filters>) => void;
	category?: string;
	subCategories: string[];
}

export default function SearchProducts({ setFilters, category, subCategories }: Props) {

	const words = useRef<any>();
	const order = useRef<any>();
	const subcategory = useRef<any>();

	const handleChange = () => {
		const formData: Filters = {
			category: category || "Todos",
			subcategories: [],
			words: words.current.value,
			sort: order.current.value === "Menor Precio" ? "lowest" : order.current.value === "Mayor Precio" ? "highest" : "default",
		}
		 
		setFilters({...formData });
	};

	return (
		<div className={style.container}>
			<form className={style.form} onChange={handleChange} onSubmit={(e: any) => {e.preventDefault()}}>
				<div className={style.inputContainer}>
					<label htmlFor="words">Buscar:</label>
					<input type="text" placeholder={`Buscar ${category ? category : "productos"}`} name="words" ref={words} />
				</div>
				<div className={style.selectorContainer}>
					<div className={style.selector}>
						<label htmlFor="subcategory">Subcategoría:</label>
						<select name="subcategory" className={style.select} ref={subcategory}>
							<option value="Todos">Todos</option>
							{subCategories?.map((subCategory, index) => (
								<option key={index} value={subCategory}>{subCategory}</option>
							))}
						</select>
					</div>
					<div className={style.selector}>
						<label htmlFor="order">Ordenar por:</label>
						<select name="order" className={style.select} ref={order}>
							<option>Sin orden</option>
							<option>Menor Precio</option>
							<option>Mayor Precio</option>
						</select>
					</div>
				</div>
				<div className={style.buttonContainer}>
					<MainButton isActive styles={style.button}>Reiniciar filtros</MainButton>
					<MainButton isActive styles={style.button}>Buscar</MainButton>
				</div>
			</form>
		</div>
	);
}
