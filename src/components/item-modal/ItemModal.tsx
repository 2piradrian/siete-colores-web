import { AiOutlineClose } from "react-icons/ai";
import { product } from "../../types";
import Button from "./../button/Button";
import style from "./style.module.css";

type Props = {
	handleView: () => void;
	handleAdd: () => void;
	item: product;
};

function ItemModal({ handleView, handleAdd, item }: Props) {
	return (
		<div onClick={handleView} className={style.container}>
			<div className={style.modal}>
				<AiOutlineClose className={style.close} />
				<img
					src={`./ProductsImg/${item.id}.jpg`}
					alt={item.name}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src = "https://drukasia.com/images/stripes/monk3.jpg";
					}}
				/>
				<h3 className={style.title}>
					{item.id} | {item.name}
				</h3>
				<div className={style.descBox}>
					<span>Tipo: </span>
					<p className={style.description}>{item.type}</p>
					<span>Tamaño: </span>
					<p className={style.description}>{item.tamaprox.replace("/", "\n")}</p>
				</div>
				<div className={style.buyBox}>
					<p className={style.price}>${item.price}</p>
					<div onClick={handleAdd}>
						<Button isActive styles={style.addItem}>
							Agregar
						</Button>
					</div>
				</div>
				<div className={style.descBox}>
					<span>Atención</span>
					<p>La compra incluye:</p>
					<ul>
						<li>Impresión: {item.name.toLowerCase()}</li>
						{item.description?.map((desc) => (
							<li>{desc}</li>
						))}
					</ul>
					<p>
						{`Fabricados en impresión 3D, con materiales biodegradables, no tóxicos.\nLavar a mano con agua fría o tibia. No apto para lavavajilla o altas temperaturas.`}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ItemModal;
