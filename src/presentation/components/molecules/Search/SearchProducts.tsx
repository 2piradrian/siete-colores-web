import { Filters } from "../../../../domain/types/filters";
import MainButton from "../../atoms/MainButton/MainButton";
import style from "./style.module.css";

type Props = {
	filters: Filters;
	clearFilters: () => void;
	setFilters: (newFilters: Partial<Filters>) => void;
	category?: string;
	subCategories: string[];
}

export default function SearchProducts({ filters, setFilters, clearFilters, category, subCategories }: Props) {

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const filters = Object.fromEntries(new FormData(e.currentTarget));

		const formData: Filters = {
			category: category as string,
			subcategory: filters.subcategory as string,
			words: filters.words as string,
			sort: filters.order as string,
		}

		setFilters({...formData });
	};

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit}>
				<div className={style.inputContainer}>
					<label htmlFor="words">Buscar:</label>
					<input type="text" placeholder={`Buscar ${category ? category : "productos"}`} name="words" defaultValue={filters.words} />
				</div>
				<div className={style.selectorContainer}>
					<div className={style.selector}>
						<label htmlFor="subcategory">Subcategoría:</label>
						<select name="subcategory" className={style.select} defaultValue={filters.subcategory}>
							<option value="Todos">Todos</option>
							{subCategories?.map((subCategory, index) => (
								<option key={index} value={subCategory}>{subCategory}</option>
							))}
						</select>
					</div>
					<div className={style.selector}>
						<label htmlFor="order">Ordenar por:</label>
						<select name="order" className={style.select} defaultValue={filters.sort}>
							<option>Sin orden</option>
							<option>Menor Precio</option>
							<option>Mayor Precio</option>
						</select>
					</div>
				</div>
				<div className={style.buttonContainer}>
					<MainButton isActive styles={style.button} type="button" onClick={clearFilters}>
						Reiniciar filtros
					</MainButton>
					<MainButton isActive styles={style.button} type="submit">
						Buscar
					</MainButton>
				</div>
			</form>
		</div>
	);
}
