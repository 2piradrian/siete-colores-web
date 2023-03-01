import Button from "../../components/button/Button";
import Titles from "../../components/titles/Titles";
import style from "./style.module.css";

function AddProducts() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const itemData = Object.fromEntries(new FormData(e.currentTarget));
	};

	return (
		<section className={`bigcontainer ${style.background}`}>
			<Titles title="Agregá productos" subtitle="al catálogo" />
			<form className={style.subcontainer} onSubmit={handleSubmit}>
				<div className={style.arrowInputs}>
					<div className={style.columnInputs}>
						<label>Nombre del Item</label>
						<input type="text" placeholder="OSO NORDICO HOJITAS" name="name" />
					</div>
					<div className={style.columnInputs}>
						<label>Código</label>
						<input type="text" placeholder="A005" name="id" />
					</div>
				</div>
				<label>Categoría</label>
				<input type="text" placeholder="ANIMALES" name="category" />
				<div className={style.arrowInputs}>
					<div className={style.columnInputs}>
						<label>Tamaño Aproximado</label>
						<input type="text" placeholder="87mm x 74mm" name="tamaprox" />
					</div>
					<div className={style.columnInputs}>
						<label>Peso</label>
						<input type="number" placeholder="15" name="weight" />
					</div>
				</div>
				<label>Tipo</label>
				<input type="text" placeholder="Cortante y sellador" name="type" />
				<button>
					<Button isActive>Agregar</Button>
				</button>
			</form>
		</section>
	);
}

export default AddProducts;
