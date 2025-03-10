import React from "react";
import { useEffect, useState } from "react";
import { Filters } from "../../../domain";
import * as style from "./style.module.css";
import MainButton from "../main-button/main-button";

type Props = {
	filters: Filters;
	clearFilters: () => void;
	setFilters: (newFilters: Partial<Filters>) => void;
	category?: string;
	subCategories: string[];
}

export default function SearchBar({ filters, setFilters, clearFilters, category, subCategories }: Props) {
	const [inputValues, setInputValues] = useState({
		words: filters.words || '',
		subcategory: filters.subcategory || 'Todos',
		order: filters.sort || 'Sin orden'
	});

	useEffect(() => {
		setInputValues({
			words: filters.words || '',
			subcategory: filters.subcategory || 'Todos',
			order: filters.sort || 'Sin orden'
		});
	}, [filters]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setInputValues(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData: Filters = {
			category: category as string,
			subcategory: inputValues.subcategory,
			words: inputValues.words,
			sort: inputValues.order,
		};

		setFilters(formData);
	};

	const handleClearFilters = () => {
		clearFilters();
		setInputValues({
			words: '',
			subcategory: 'Todos',
			order: 'Sin orden'
		});
	};

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit}>
				<div className={style.inputContainer}>
					<label htmlFor="words">Buscar:</label>
					<input 
						type="text" 
						placeholder={`Buscar ${category ? category : "productos"}`} 
						name="words" 
						value={inputValues.words} 
						onChange={handleInputChange} 
					/>
				</div>
				<div className={style.selectorContainer}>
					<div className={style.selector}>
						<label htmlFor="subcategory">Subcategoría:</label>
						<select 
							name="subcategory" 
							className={style.select} 
							value={inputValues.subcategory} 
							onChange={handleInputChange}
						>
							<option value="Todos">Todos</option>
							{subCategories?.map((subCategory, index) => (
								<option key={index} value={subCategory}>{subCategory}</option>
							))}
						</select>
					</div>
					<div className={style.selector}>
						<label htmlFor="order">Ordenar por:</label>
						<select 
							name="order" 
							className={style.select} 
							value={inputValues.order} 
							onChange={handleInputChange}
						>
							<option>Sin orden</option>
							<option>Menor Precio</option>
							<option>Mayor Precio</option>
						</select>
					</div>
				</div>
				<div className={style.buttonContainer}>
					<MainButton isActive styles={style.button} type="button" onClick={handleClearFilters}>
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