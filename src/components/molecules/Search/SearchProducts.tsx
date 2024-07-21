import { Dispatch, SetStateAction, useRef } from "react";
import { Filters } from "../../../types/filters";
import style from "./style.module.css";

type Props = {
	setFilters: Dispatch<SetStateAction<Filters>>;
	category?: string;
}

export default function SearchProducts({ setFilters, category }: Props) {

	const name = useRef<any>();
	const order = useRef<any>();

	const handleChange = () => {
		const formData: Filters = {
			category: category || "Todos",
			words: name.current.value,
			sort: order.current.value === "Menor Precio" ? "lowest" : order.current.value === "Mayor Precio" ? "highest" : "default",
		}
		 
		setFilters((prevFilters) => ({ ...prevFilters, ...formData }));
	};

	return (
		<div className={style.container}>
			<form className={style.form} onChange={handleChange} onSubmit={(e: any) => {e.preventDefault()}}>
				<input type="text" placeholder={`Buscar ${category ? category : "productos"}`} name="name" ref={name} />
				<div className={style.selector}>
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
