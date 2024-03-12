import { Dispatch, SetStateAction, useRef } from "react";
import { Filters } from "../../../types/filters";
import style from "./style.module.css";

export default function SearchProducts({ setFilters }: { setFilters: Dispatch<SetStateAction<Filters>> }) {

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

	return (
		<div className={style.container}>
			<form className={style.form} onChange={handleChange}>
				<input type="text" placeholder="Buscar por nombre" name="name" ref={name} />
				<div className={style.selector}>
					<select name="type" className={style.select} ref={category}>
						<option>Todos</option>
						<option>Animales</option>
						<option>Artesanos</option>
						<option>Bautismo</option>
						<option>Comunión</option>
						<option>Contramoldes</option>
						<option>Deportes</option>
						<option>Formas</option>
						<option>Halloween</option>
						<option>Letras y números</option>
						<option>Marcos</option>
						<option>Navidad</option>
						<option>Pascuas</option>
						<option>Personajes</option>
						<option>Plantas</option>
						<option>Profesiones</option>
						<option>Scrapers</option>
						<option>Sellos</option>
						<option>Texturizadores</option>
						<option>Toppers</option>
						<option>Transportes</option>
						<option>Varios</option>
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