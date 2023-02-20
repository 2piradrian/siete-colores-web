import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { clear_filters, set_filters } from "./../../redux/actions/creators";

import { toast, Toaster } from "react-hot-toast";
import Titles from "../titles/Titles";
import Button from "./../button/Button";
import style from "./style.module.css";

function Search() {
	const dispatch = useDispatch();
	const name = useRef<any>();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.currentTarget));
		dispatch(set_filters(formData));

		toast("🔍Filtros Actualizados");
	};

	const handleClear = () => {
		dispatch(clear_filters());
		toast("🔍Filtros Actualizados");
		name.current.value = "";
	};

	return (
		<div className={`smallcontainer ${style.background}`}>
			<Titles title="Productos" subtitle="Mirá lo que tenemos para ofrecerte" />
			<form onSubmit={handleSubmit} className={style.form}>
				<input type="text" placeholder="Buscar por nombre" name="name" ref={name} />
				<div className={style.selector}>
					<select name="type">
						<option>Todos</option>
						<option>Abecedario</option>
						<option>Cortante</option>
						<option>Cortante y sellador</option>
						<option>Mandalas</option>
						<option>Scraper</option>
						<option>Sello</option>
						<option>Texturizadores</option>
						<option>Toppers</option>
					</select>
					<select name="order">
						<option>Ordenar por</option>
						<option>Menor Precio</option>
						<option>Mayor Precio</option>
					</select>
				</div>
				<div className={style.filter}>
					<button type="submit" className={style.buttonContainer}>
						<Button isActive styles={style.button}>
							Filtrar productos
						</Button>
					</button>
					<div onClick={() => handleClear()}>
						<Button isActive styles={style.button}>
							Borrar filtros
						</Button>
					</div>
				</div>
			</form>
			<Toaster />
		</div>
	);
}

export default Search;
