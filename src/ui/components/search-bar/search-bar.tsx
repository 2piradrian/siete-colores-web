import React from "react";
import MainButton from "../main-button/main-button";
import { Filters } from "../../../domain";
import * as style from "./style.module.css";

type Props = {
	filters: Filters;
	handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	updateFilters: (e: React.FormEvent<HTMLFormElement>) => void;
	clearFilters: () => void;
	subCategories: string[];
}

export default function SearchBar({ filters, handleFormChange, updateFilters, clearFilters, subCategories }: Props) {

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={updateFilters}>
				<div className={style.inputContainer}>
					<label htmlFor="words">Buscar:</label>
					<input 
						type="text" 
						key={filters.words}
						name="words" 
						placeholder={`Buscar ${filters.category ? filters.category : "productos"}`} 
						defaultValue={filters.words} 
					/>
				</div>
				<div className={style.selectorContainer}>
					<div className={style.selector}>
						<label htmlFor="subcategory">Subcategoría:</label>
						<select 
							name="subcategory"
							key={filters.subcategory}
							onChange={handleFormChange}
							value={filters.subcategory} 
							className={style.select} 
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
							key={filters.sort}
							onChange={handleFormChange}
							value={filters.sort} 
							className={style.select} 
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