import React from "react";
import MainButton from "../main-button/main-button";
import { Filters } from "../../../domain";
import * as style from "./style.module.css";

type Props = {
	filters: Filters;
	clearFilters: () => void;
	subCategories: string[];
}

export default function SearchBar({ filters, clearFilters, subCategories }: Props) {
	console.log(filters);
	return (
		<div className={style.container}>
			<form className={style.form}>
				<div className={style.inputContainer}>
					<label htmlFor="words">Buscar:</label>
					<input 
						type="text" 
						placeholder={`Buscar ${filters.category ? filters.category : "productos"}`} 
						name="words" 
						defaultValue={filters.words} 
						key={filters.words}
					/>
				</div>
				<div className={style.selectorContainer}>
					<div className={style.selector}>
						<label htmlFor="subcategory">Subcategoría:</label>
						<select 
							name="subcategory"
							className={style.select} 
							defaultValue={filters.subcategory} 
							key={filters.subcategory}
						>
							<option value="Todos">Todos</option>
							{subCategories.map((subCategory, index) => (
								<option key={index} value={subCategory}>{subCategory}</option>
							))}
						</select>
					</div>
					<div className={style.selector}>
						<label htmlFor="sort">Ordenar por:</label>
						<select 
							name="sort" 
							className={style.select} 
							defaultValue={filters.sort} 
							key={filters.sort}
						>
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
			<hr className={style.divider} />
		</div>
	);
}